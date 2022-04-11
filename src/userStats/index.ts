import { ethers } from "ethers";
import { DynamoDB } from "aws-sdk";
import dayjs from "dayjs";
import { tableName } from "../../lib/starlay-asset-data-api-stack";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { LendingPoolFactory } from "../types/LendingPoolFactory";
import { LendingPool } from "../types/LendingPool";
import { retry } from "ts-retry-promise";
import { Multicall } from "../types/Multicall";
import { MulticallFactory } from "../types/MulticallFactory";
dayjs.extend(utc);
dayjs.extend(timezone);

const ddbdc = new DynamoDB.DocumentClient();

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.astar.network:8545"
);
const lendingPoolAddress = "0x90384334333f3356eFDD5b20016350843b90f182";
const multiCallAddress = "0x7D6046156df81EF335E7e765d3bc714960B73207";
interface DDBParam {
  id: string;
  data: string;
  timestamp: string;
  uniqueDepositedUsers: number;
  uniqueBorrowedUsers: number;
  depositTxCount: number;
  borrowTxCount: number;
}

interface DDBHealthFactorParam {
  id: string;
  type: string;
  timestamp: string;
  number: number;
  borrowed: string;
}

export async function handler(): Promise<void> {
  const multiCall = MulticallFactory.connect(multiCallAddress, provider);
  const lendingPool = LendingPoolFactory.connect(lendingPoolAddress, provider);
  const deposited = await getALlDepositedUsers(provider, lendingPool);
  const borrowed = await getAllBorrowedUsers(provider, lendingPool);
  const uniqueDeposited = [...new Set(deposited)];
  const uniqueBorrowed = [...new Set(borrowed)];

  const now = new Date();
  const date = dayjs().utc().startOf("hour");
  const ddbParam: DDBParam = {
    id: `statistics:${date.toISOString()}`,
    data: `${date.toISOString()}`,
    timestamp: Math.floor(now.getTime() / 1000).toString(),
    uniqueDepositedUsers: uniqueDeposited.length,
    uniqueBorrowedUsers: uniqueBorrowed.length,
    depositTxCount: deposited.length,
    borrowTxCount: borrowed.length,
  };

  const param: DynamoDB.DocumentClient.PutItemInput = {
    TableName: tableName,
    Item: ddbParam,
  };
  ddbdc.put(param, function (err) {
    if (err) {
      console.log(err);
    }
  });

  const chunk = 20;
  for (let i = 0; i < uniqueBorrowed.length; i += chunk) {
    const results = await getHealthFactor(
      uniqueBorrowed.slice(i, i + chunk),
      now,
      lendingPool,
      multiCall
    );
    await ddbdc
      .batchWrite({
        RequestItems: {
          [tableName]: results.map((Item) => ({ PutRequest: { Item } })),
        },
      })
      .promise()
      .catch((err) => console.log(err));
  }
}

async function getHealthFactor(
  borrowedUsers: string[],
  now: Date,
  lendingPool: LendingPool,
  multiCall: Multicall
) {
  const calls = borrowedUsers.map((addr) => ({
    target: lendingPool.address,
    callData: lendingPool.interface.encodeFunctionData("getUserAccountData", [
      addr,
    ]),
  }));

  const { returnData } = await retry(
    () => multiCall.callStatic.aggregate(calls),
    { retries: 3, backoff: "EXPONENTIAL", timeout: 100 * 1000 }
  );

  return borrowedUsers.map((addr, index) => {
    const data = lendingPool.interface.decodeFunctionResult(
      "getUserAccountData",
      returnData[index]
    );
    const input: DDBHealthFactorParam = {
      id: addr,
      type: "HealthFactor",
      number: +Number(ethers.utils.formatEther(data.healthFactor)).toFixed(8),
      borrowed: ethers.utils.formatUnits(data.totalDebtETH.toString(), 8),
      timestamp: Math.floor(now.getTime() / 1000).toString(),
    };
    return input;
  });
}

const getAllBorrowedUsers = async (
  provider: ethers.providers.JsonRpcProvider,
  pool: LendingPool
) => {
  return getUsers(provider, pool, getBorrowed);
};

const getALlDepositedUsers = async (
  provider: ethers.providers.JsonRpcProvider,
  pool: LendingPool
) => {
  return getUsers(provider, pool, getDeposited);
};

const getUsers = async (
  provider: ethers.providers.JsonRpcProvider,
  pool: LendingPool,
  callback: (
    provider: ethers.providers.JsonRpcProvider,
    address: string,
    from: number,
    to: number
  ) => Promise<ethers.providers.Log[]>
) => {
  const blocksPerRequest = 1000;
  let res: string[] = [];
  let from = 508500;
  const current = await provider.getBlockNumber();
  while (from < current) {
    console.log('get event logs start from:', from);
    const _got = await callback(
      provider,
      pool.address,
      from,
      from + blocksPerRequest
    );
    if (_got.length != 0) {
      _got.forEach((e) => {
        const log = pool.interface.parseLog(e);
        res.push(log.args[1]);
      });
    }
    from += blocksPerRequest;
  }
  return res;
};
const getBorrowed = async (
  provider: ethers.providers.JsonRpcProvider,
  pool: string,
  from: number,
  to: number
) => {
  return getLogs(provider, pool, from, to, [
    ethers.utils.id(
      "Borrow(address,address,address,uint256,uint256,uint256,uint16)"
    ),
  ]);
};

const getLogs = async (
  provider: ethers.providers.JsonRpcProvider,
  address: string,
  fromBlock: number,
  toBlock: number,
  topics: string[]
) => {
  return provider.getLogs({
    address,
    fromBlock,
    toBlock,
    topics,
  });
};

const getDeposited = async (
  provider: ethers.providers.JsonRpcProvider,
  pool: string,
  from: number,
  to: number
) => {
  return getLogs(provider, pool, from, to, [
    ethers.utils.id("Deposit(address,address,address,uint256,uint16)"),
  ]);
};
