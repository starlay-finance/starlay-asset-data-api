import {
  ReserveIncentiveWithFeedsResponse,
  ReservesDataHumanized,
  UiIncentiveDataProvider,
  UiPoolDataProvider,
} from '@starlay-finance/contract-helpers';
import { ethers } from 'ethers';
import { DynamoDB } from 'aws-sdk';
import dayjs = require('dayjs');
import { tableName } from '../../lib/starlay-asset-data-api-stack';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
dayjs.extend(timezone);

const ddbdc = new DynamoDB.DocumentClient();

const provider = new ethers.providers.JsonRpcProvider(
  'https://rpc.astar.network:8545'
);
const uiPoolDataProviderAddress = '0x97Fc9e6aFB9d7A9C9898a2b6F97Da43EB5f56331';
const incentiveDataProviderAddress =
  '0x08ba69145938dD3CB0EE94c0D59EF6364059956B';
const priceAggregatorAdapterAddress =
  '0x21A097fE49F10E9cedD979eE46ADAF6eef87DE4b';
const lendingPoolAddressProvider = '0x4c37A76Bf49c01f91E275d5257a228dad1b74EF9';

interface DDBParam {
  id: string; // id: date
  timestamp: string;
  poolData: ReservesDataHumanized;
  reservesIncentives: ReserveIncentiveWithFeedsResponse[];
}

export async function handler(event: any, context: any): Promise<void> {
  const uiPoolDataProvider = new UiPoolDataProvider({
    provider,
    uiPoolDataProviderAddress,
  });
  const uiIncentiveDataProvider = new UiIncentiveDataProvider({
    provider,
    incentiveDataProviderAddress,
    priceAggregatorAdapterAddress,
  });
  const [poolData, reservesIncentives] = await Promise.all([
    uiPoolDataProvider.getReservesHumanized(lendingPoolAddressProvider),
    uiIncentiveDataProvider.getIncentivesDataWithPrice({
      lendingPoolAddressProvider,
    }),
  ]);
  const now = new Date();
  const date = dayjs().utc().startOf('date');
  const ddbParam: DDBParam = {
    id: date.toISOString(),
    timestamp: Math.floor(now.getTime() / 1000).toString(),
    poolData: poolData,
    reservesIncentives: reservesIncentives,
  };
  const param: DynamoDB.DocumentClient.PutItemInput = {
    TableName: tableName,
    Item: ddbParam,
  };
  ddbdc.put(param, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
}
