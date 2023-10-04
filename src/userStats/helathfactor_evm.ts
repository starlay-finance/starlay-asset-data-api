import { DynamoDB } from 'aws-sdk'
import { ethers } from 'ethers'
import { retry } from 'ts-retry-promise'
import { tableName } from '../../lib/starlay-asset-data-api-stack'
import { LendingPool } from '../types/LendingPool'
import { Multicall } from '../types/Multicall'

interface DDBHealthFactorParam {
  id: string
  type: string
  timestamp: string
  number: number
  borrowed: string
}

const CHUNK_SIZE = 20

export const recordHealthFactorEVM = async (
  ddbdc: DynamoDB.DocumentClient,
  uniqueBorrowers: string[],
  lendingPool: LendingPool,
  multiCall: Multicall,
  timestamp: number,
) => {
  for (let i = 0; i < uniqueBorrowers.length; i += CHUNK_SIZE) {
    const results = await getHealthFactor(
      uniqueBorrowers.slice(i, i + CHUNK_SIZE),
      lendingPool,
      multiCall,
      timestamp,
    )
    await ddbdc
      .batchWrite({
        RequestItems: {
          [tableName]: results.map((Item) => ({ PutRequest: { Item } })),
        },
      })
      .promise()
      .catch((err) => console.error(err))
  }
}

const getHealthFactor = async (
  borrowedUsers: string[],
  lendingPool: LendingPool,
  multiCall: Multicall,
  timestamp: number,
) => {
  const calls = borrowedUsers.map((addr) => ({
    target: lendingPool.address,
    callData: lendingPool.interface.encodeFunctionData('getUserAccountData', [
      addr,
    ]),
  }))

  const { returnData } = await retry(
    () => multiCall.callStatic.aggregate(calls),
    { retries: 3, backoff: 'EXPONENTIAL', timeout: 100 * 1000 },
  )

  return borrowedUsers.map((addr, index) => {
    const data = lendingPool.interface.decodeFunctionResult(
      'getUserAccountData',
      returnData[index],
    )
    const input: DDBHealthFactorParam = {
      id: addr,
      type: 'HealthFactor',
      number: +Number(ethers.utils.formatEther(data.healthFactor)).toFixed(8),
      borrowed: ethers.utils.formatUnits(data.totalDebtETH.toString(), 8),
      timestamp: `${timestamp}`,
    }
    return input
  })
}
