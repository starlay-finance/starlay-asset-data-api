import { ethers } from 'ethers';
import { DynamoDB } from 'aws-sdk';
import dayjs = require('dayjs');
import { tableName } from '../../lib/starlay-asset-data-api-stack';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { LendingPoolFactory } from '../types/LendingPoolFactory';
import { LendingPool } from '../types/LendingPool';
import { retry } from 'ts-retry-promise';
dayjs.extend(utc);
dayjs.extend(timezone);

const ddbdc = new DynamoDB.DocumentClient();

const provider = new ethers.providers.JsonRpcProvider(
  'https://rpc.astar.network:8545'
);
const lendingPoolAddress = '0x90384334333f3356eFDD5b20016350843b90f182';
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
}

export async function handler(event: any, context: any): Promise<void> {
  const lendingPool = LendingPoolFactory.connect(lendingPoolAddress, provider);
  const deposited = await getALlDepositedUsers(provider, lendingPool);
  const borrowed = await getAllBorrowedUsers(provider, lendingPool);
  const uniqueDeposited = [...new Set(deposited)];
  const uniqueBorrowed = [...new Set(borrowed)];

  const now = new Date();
  const date = dayjs().utc().startOf('hour');
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
  const chunk = 10;
  let promises = [];
  for (let index = 0; index < borrowed.length; index++) {
    promises.push(getHealthFactor(borrowed[index], now, lendingPool));
    if ((index + 1) % chunk === 0 || index + 1 === borrowed.length) {
      (await Promise.all(promises)).forEach((i) => {
        ddbdc.put(
          {
            TableName: tableName,
            Item: i,
          },
          (err) => {
            console.log(err);
          }
        );
      });
      promises = [];
    }
  }
}

async function getHealthFactor(
  borrowedUser: string,
  now: Date,
  lendingPool: LendingPool
) {
  const data = await retry(() => lendingPool.getUserAccountData(borrowedUser), {
    retries: 3,
    backoff: 'EXPONENTIAL',
    timeout: 100 * 1000,
  });
  const input: DDBHealthFactorParam = {
    id: borrowedUser,
    type: 'HealthFactor',
    number: Number(ethers.utils.formatEther(data.healthFactor)),
    timestamp: Math.floor(now.getTime() / 1000).toString(),
  };
  return input;
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
      'Borrow(address,address,address,uint256,uint256,uint256,uint16)'
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
    ethers.utils.id('Deposit(address,address,address,uint256,uint16)'),
  ]);
};
