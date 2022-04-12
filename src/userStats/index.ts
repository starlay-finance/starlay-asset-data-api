import { DynamoDB } from 'aws-sdk'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { ethers } from 'ethers'
import { LendingPoolFactory } from '../types/LendingPoolFactory'
import { MulticallFactory } from '../types/MulticallFactory'
import { recordHealthFactor } from './helathfactor'
import { recordStats } from './statistics'

dayjs.extend(utc)
dayjs.extend(timezone)

const ddbdc = new DynamoDB.DocumentClient()

const provider = new ethers.providers.JsonRpcProvider(
  'https://rpc.astar.network:8545',
)
const lendingPoolAddress = '0x90384334333f3356eFDD5b20016350843b90f182'
const multiCallAddress = '0x7D6046156df81EF335E7e765d3bc714960B73207'

export const handler = async () => {
  const multiCall = MulticallFactory.connect(multiCallAddress, provider)
  const lendingPool = LendingPoolFactory.connect(lendingPoolAddress, provider)
  const timestamp = dayjs().unix()
  const currentBlock = await provider.getBlockNumber()

  const { uniqueBorrowers } = await recordStats(
    ddbdc,
    lendingPool,
    currentBlock,
    timestamp,
  )
  await recordHealthFactor(
    ddbdc,
    uniqueBorrowers,
    lendingPool,
    multiCall,
    timestamp,
  )
}
