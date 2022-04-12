import { DynamoDB } from 'aws-sdk'
import dayjs from 'dayjs'
import { EventFilter } from 'ethers'
import { retry } from 'ts-retry-promise'
import { tableName } from '../../lib/starlay-asset-data-api-stack'
import { LendingPool } from '../types/LendingPool'

interface DDBStatsParam {
  id: `statistics:${string}`
  data: string
  timestamp: string
  uniqueDepositedUsers: number
  uniqueBorrowedUsers: number
  depositTxCount: number
  borrowTxCount: number
}

const START_BLOCK = 508500
const BLOCKS_PER_REQUEST = 1000

export const recordStats = async (
  ddbdc: DynamoDB.DocumentClient,
  lendingPool: LendingPool,
  currentBlock: number,
  timestamp: number,
) => {
  const log = await gerPreviousStatsLog(ddbdc)
  const startBlock = log ? log.block + 1 : START_BLOCK
  const { depositors, borrowers } = await getUsers(
    lendingPool,
    currentBlock,
    startBlock,
  )

  const uniqueDepositors = Array.from(new Set(depositors))
  const uniqueBorrowers = Array.from(new Set(borrowers))

  const date = dayjs.unix(timestamp).utc().startOf('hour')
  const ddbParam: DDBStatsParam = {
    id: `statistics:${date.toISOString()}`,
    data: `${date.toISOString()}`,
    timestamp: `${timestamp}`,
    uniqueDepositedUsers: uniqueDepositors.length,
    uniqueBorrowedUsers: uniqueBorrowers.length,
    depositTxCount: depositors.length,
    borrowTxCount: borrowers.length,
  }

  const param: DynamoDB.DocumentClient.PutItemInput = {
    TableName: tableName,
    Item: ddbParam,
  }
  await ddbdc
    .put(param)
    .promise()
    .catch((e) => console.error(e))

  return {
    uniqueBorrowers,
  }
}

const getUsers = async (
  pool: LendingPool,
  currentBlock: number,
  startBlock?: number,
) => {
  const depositors = await getDepositedUsers(pool, currentBlock, startBlock)
  const borrowers = await getBorrowedUsers(pool, currentBlock, startBlock)
  return { depositors, borrowers }
}

const getDepositedUsers = async (
  pool: LendingPool,
  currentBlock: number,
  startBlock?: number,
) =>
  getUsersFromEvents(
    pool,
    pool.filters.Deposit(null, null, null, null, null),
    currentBlock,
    startBlock,
  )

const getBorrowedUsers = async (
  pool: LendingPool,
  currentBlock: number,
  startBlock?: number,
) =>
  getUsersFromEvents(
    pool,
    pool.filters.Borrow(null, null, null, null, null, null, null),
    currentBlock,
    startBlock,
  )

const getUsersFromEvents = async (
  pool: LendingPool,
  eventFilter: EventFilter,
  currentBlock: number,
  startBlock: number = START_BLOCK,
) => {
  const res: string[] = []
  for (let from = startBlock; from < currentBlock; from += BLOCKS_PER_REQUEST) {
    console.log('get event logs start from:', from)
    await retry(
      async () => {
        const logs = await pool.queryFilter(
          eventFilter,
          from,
          from + BLOCKS_PER_REQUEST,
        )
        res.push(...logs.map((log) => pool.interface.parseLog(log).args[1]))
      },
      { retries: 3, backoff: 'EXPONENTIAL', timeout: 100 * 1000 },
    )
  }
  return res
}
