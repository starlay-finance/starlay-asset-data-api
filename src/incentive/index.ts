import {
  ReserveIncentiveWithFeedsResponse,
  ReservesDataHumanized,
  UiIncentiveDataProvider,
  UiPoolDataProvider,
} from '@starlay-finance/contract-helpers'
import { DynamoDB } from 'aws-sdk'
import BigNumberJs from 'bignumber.js'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { ethers } from 'ethers'
import { tableName } from '../../lib/starlay-asset-data-api-stack'
import { getPriceFromArthSwap } from './price'

import dayjs = require('dayjs')
dayjs.extend(utc)
dayjs.extend(timezone)

const ddbdc = new DynamoDB.DocumentClient()

const provider = new ethers.providers.JsonRpcProvider(
  'https://rpc.astar.network:8545',
)
const uiPoolDataProviderAddress = '0x97Fc9e6aFB9d7A9C9898a2b6F97Da43EB5f56331'
const incentiveDataProviderAddress =
  '0x08ba69145938dD3CB0EE94c0D59EF6364059956B'
const priceAggregatorAdapterAddress =
  '0x21A097fE49F10E9cedD979eE46ADAF6eef87DE4b'
const lendingPoolAddressProvider = '0x4c37A76Bf49c01f91E275d5257a228dad1b74EF9'

const layAddress = '0xc4335B1b76fA6d52877b3046ECA68F6E708a27dd'
const wasterAddress = '0xAeaaf0e2c81Af264101B9129C00F4440cCF0F720'
const layWasterPoolAddress = '0x78D5C2Adeb11BE00033Cc4EDB2C2889CF945415E'
const multicallAddress = '0x7D6046156df81EF335E7e765d3bc714960B73207'

interface DDBParam {
  id: string // id: date
  timestamp: string
  poolData: ReservesDataHumanized
  reservesIncentives: ReserveIncentiveWithFeedsResponse[]
}

const ORACLE_DECIMALS = 8

export async function handler(event: any, context: any): Promise<void> {
  const uiPoolDataProvider = new UiPoolDataProvider({
    provider,
    uiPoolDataProviderAddress,
  })
  const uiIncentiveDataProvider = new UiIncentiveDataProvider({
    provider,
    incentiveDataProviderAddress,
    priceAggregatorAdapterAddress,
  })
  const [poolData, reservesIncentives] = await Promise.all([
    uiPoolDataProvider.getReservesHumanized(lendingPoolAddressProvider),
    uiIncentiveDataProvider.getIncentivesDataWithPrice({
      lendingPoolAddressProvider,
    }),
  ])
  console.log('pooldata', poolData)
  console.log('reservesIncentives', reservesIncentives)

  const wasterPriceInMarketReferenceCurrency = poolData.reservesData.find(
    ({ underlyingAsset }) =>
      underlyingAsset.toLowerCase() === wasterAddress.toLowerCase(),
  )?.priceInMarketReferenceCurrency

  const layPrice = await getPriceFromArthSwap(
    layAddress,
    wasterAddress,
    layWasterPoolAddress,
    new BigNumberJs(wasterPriceInMarketReferenceCurrency || 0).shiftedBy(
      -ORACLE_DECIMALS,
    ),
    multicallAddress,
    provider,
  )

  const now = new Date()
  const date = dayjs().utc().startOf('date')
  console.log('date', date.toString())
  const ddbParam: DDBParam = {
    id: date.toISOString(),
    timestamp: Math.floor(now.getTime() / 1000).toString(),
    poolData: {
      ...poolData,
      reservesData: poolData.reservesData.map((e) => {
        if (e.underlyingAsset.toLowerCase() !== layAddress.toLowerCase())
          return e
        return {
          ...e,
          priceInMarketReferenceCurrency: layPrice
            .shiftedBy(ORACLE_DECIMALS)
            .toFixed(0, BigNumberJs.ROUND_FLOOR),
        }
      }),
    },
    reservesIncentives: reservesIncentives,
  }
  const param: DynamoDB.DocumentClient.PutItemInput = {
    TableName: tableName,
    Item: ddbParam,
  }
  await ddbdc.put(param).promise()
  console.log('fin')
}
