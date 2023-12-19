import { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { BlockHash } from '@polkadot/types/interfaces/chain';
import { DynamoDB } from 'aws-sdk';
import dayjs from 'dayjs';
import { tableName } from '../../lib/starlay-asset-data-api-stack';
import Controller from '../types-wasm/contracts/controller';
import Pool from '../types-wasm/contracts/pool';

const START_BLOCK = 4538641
const BLOCKS_PER_REQUEST = 100

interface DDBStatsParam {
  id: `statistics:${string}-wasm`
  data: string
  timestamp: string
  uniqueDepositedUsers: number
  uniqueBorrowedUsers: number
  depositTxCount: number
  borrowTxCount: number
}

interface DDBStatsLogParam {
  id: `statistics-log-wasm`
  block: number
  uniqueDepositedUsers: string[]
  uniqueBorrowedUsers: string[]
  depositTxCount: number
  borrowTxCount: number
}

const EMPTY_LOG: Omit<DDBStatsLogParam, 'id'> = {
  block: START_BLOCK,
  uniqueBorrowedUsers: [],
  uniqueDepositedUsers: [],
  depositTxCount: 0,
  borrowTxCount: 0,
}

export const recordStatsWASM = async (
  ddbdc: DynamoDB.DocumentClient,
  controller: Controller,
  signer: KeyringPair,
  api: ApiPromise,
  currentBlock: number,
  timestamp: number,
) => {
  const poolsAddress = (await controller.query.markets()).value.ok
  console.log('poolsAddress', poolsAddress)
  const pools = poolsAddress ? poolsAddress.map(pool => new Pool(pool.toString(), signer, api)) : []

  const log = (await gerPreviousStatsLog(ddbdc)) || EMPTY_LOG
  const { depositors, borrowers } = await getUsers(
    api,
    pools,
    currentBlock,
    log.block + 1,
  )

  const uniqueDepositors = Array.from(
    new Set(depositors.concat(log.uniqueDepositedUsers)),
  )
  const uniqueBorrowers = Array.from(
    new Set(borrowers.concat(log.uniqueBorrowedUsers)),
  )

  const date = dayjs.unix(timestamp).utc().startOf('hour')
  const ddbParam: DDBStatsParam = {
    id: `statistics:${date.toISOString()}-wasm`,
    data: `${date.toISOString()}`,
    timestamp: `${timestamp}`,
    uniqueDepositedUsers: uniqueDepositors.length,
    uniqueBorrowedUsers: uniqueBorrowers.length,
    depositTxCount: depositors.length + log.depositTxCount,
    borrowTxCount: borrowers.length + log.borrowTxCount,
  }

  const param: DynamoDB.DocumentClient.PutItemInput = {
    TableName: tableName,
    Item: ddbParam,
  }
  // await ddbdc
  //   .put(param)
  //   .promise()
  //   .catch((e) => console.error(e))

  const ddbStatsLogParam: DDBStatsLogParam = {
    id: `statistics-log-wasm`,
    block: currentBlock,
    uniqueDepositedUsers: uniqueDepositors,
    uniqueBorrowedUsers: uniqueBorrowers,
    depositTxCount: ddbParam.depositTxCount,
    borrowTxCount: ddbParam.borrowTxCount,
  }

  const logParam: DynamoDB.DocumentClient.PutItemInput = {
    TableName: tableName,
    Item: ddbStatsLogParam,
  }
  // await ddbdc
  //   .put(logParam)
  //   .promise()
  //   .catch((e) => console.error(e))

  return {
    uniqueBorrowers,
  }
}


const gerPreviousStatsLog = async (ddbdc: DynamoDB.DocumentClient) => {
  // const res = await ddbdc
  //   .get({
  //     TableName: tableName,
  //     Key: { id: 'statistics-log' },
  //   })
  //   .promise()
  // return res.Item as DDBStatsLogParam | undefined
  return undefined
}

const getUsers = async (
  api: ApiPromise,
  pools: Pool[],
  currentBlock: number,
  startBlock: number = START_BLOCK,
) => {
  for (let blockHeight = startBlock; blockHeight < currentBlock; blockHeight++) {
    console.log('get event logs start from:', blockHeight)
    const blockHash = await api.rpc.chain.getBlockHash(blockHeight) as BlockHash
    const events = await api.query.system.events.at(blockHash);
    console.log(JSON.stringify(events))
  }
  // const depositors = await getDepositedUsers(pools, currentBlock, startBlock)
  // const borrowers = await getBorrowedUsers(pools, currentBlock, startBlock)
  return { depositors: [''], borrowers: [''] }
}

const getDepositedUsers = async (
  api: ApiPromise,
  pools: Pool[],
  currentBlock: number,
  startBlock?: number,
) =>
  getUsersFromEvents(
    api,
    pools,
    currentBlock,
    startBlock,
  )

const getBorrowedUsers = async (
  api: ApiPromise,
  pools: Pool[],
  currentBlock: number,
  startBlock?: number,
) =>
  getUsersFromEvents(
    api,
    pools,
    currentBlock,
    startBlock,
  )

const getUsersFromEvents = async (
  api: ApiPromise,
  pools: Pool[],
  currentBlock: number,
  startBlock: number = START_BLOCK,
) => {
  const res: string[] = []
  for (let from = startBlock; from < currentBlock; from += BLOCKS_PER_REQUEST) {
    // console.log('get event logs start from:', from)
    // const blockHash = await api.rpc.chain.getBlockHash(blockHeight) as Hash

    // await retry(
    //   async () => {
    //     for (const pool of pools) {

    //     }
    //     // const logs = await pool.queryFilter(
    //     //   eventFilter,
    //     //   from,
    //     //   from + BLOCKS_PER_REQUEST,
    //     // )
    //     // res.push(...logs.map((log) => pool.interface.parseLog(log).args[1]))
    //   },
    //   { retries: 3, backoff: 'EXPONENTIAL', timeout: 100 * 1000 },
    // )
  }
  return res
}
