import { MulticallFactory } from './../types/MulticallFactory';
import { BigNumber, ethers } from 'ethers';
import { IDiaAggregatorFactory } from '../types/IDiaAggregatorFactory';
import { CoinGeckoClient } from 'coingecko-api-v3';
import { IncomingWebhook } from '@slack/webhook';
import { SSM } from 'aws-sdk';

const assetInfo: {
  asset: string;
  coingeckoId: string;
}[] = [
  {
    asset: 'USDC',
    coingeckoId: 'usd-coin',
  },
  {
    asset: 'USDT',
    coingeckoId: 'tether',
  },
  {
    asset: 'DAI',
    coingeckoId: 'dai',
  },
  {
    asset: 'BUSD',
    coingeckoId: 'binance-usd',
  },
  {
    asset: 'ETH',
    coingeckoId: 'ethereum',
  },
  {
    asset: 'WBTC',
    coingeckoId: 'wrapped-bitcoin',
  },
  {
    asset: 'SDN',
    coingeckoId: 'shiden',
  },
  {
    asset: 'ASTR',
    coingeckoId: 'astar',
  },
];

const alertConfig: {
  toleranceDiffPercent: number;
  toleranceMultiplier: number;
} = { toleranceDiffPercent: 50, toleranceMultiplier: 1000 };

const addressConfig: {
  oracleAddress: string;
  multiCallAddress: string;
} = {
  oracleAddress: '0x35490A8AC7cD0Df5C4d7Ab4243A6B517133BcDB1',
  multiCallAddress: '0x7D6046156df81EF335E7e765d3bc714960B73207',
};

const oraclePriceDecimals = 1e8;

export async function handler(event: any, context: any): Promise<void> {
  const pricesFromOracle = await fromOracle();
  const priceFromCoingecko = await fromCoingecko();
  const alertTarget = assetInfo
    .map((info, index) => {
      const oraclePrice = pricesFromOracle[index][0] as BigNumber;
      const coingeckoPrice = BigNumber.from(
        (
          priceFromCoingecko[info.coingeckoId]['usd'] * oraclePriceDecimals
        ).toFixed()
      );
      const diff = oraclePrice.sub(coingeckoPrice).abs();
      const toleranceDiff = coingeckoPrice
        .mul(alertConfig.toleranceDiffPercent)
        .div(alertConfig.toleranceMultiplier);
      const acceptable = diff.lte(toleranceDiff);
      return {
        symbol: info.asset,
        oraclePrice,
        coingeckoPrice,
        diff,
        acceptable,
      };
    })
    .filter((p) => !p.acceptable);
  if (alertTarget.length == 0) {
    return;
  }
  const webhookURL = (await getWebhookURL()) || '';
  for (const target of alertTarget) {
    await notifyToTeam(target, webhookURL);
  }
}

const getWebhookURL = async () => {
  const ssm = new SSM({ region: 'us-east-1' });
  const result = await ssm
    .getParameter({ Name: 'starlay-slack-webhook-url', WithDecryption: true })
    .promise();
  return result.Parameter?.Value;
};

const notifyToTeam = async (
  price: {
    symbol: string;
    oraclePrice: BigNumber;
    coingeckoPrice: BigNumber;
    diff: BigNumber;
  },
  webhookUrl: string
) => {
  console.log(price);
  const webhook = new IncomingWebhook(webhookUrl);
  await webhook.send({
    text: ':rotating_light: Oracle price Alert :rotating_light:',
    attachments: [
      {
        title: 'Symbol',
        text: price.symbol,
      },
      {
        title: 'Oracle Price',
        text: price.oraclePrice.toString(),
      },
      {
        title: 'Reference Price',
        text: price.coingeckoPrice.toString(),
      },
      {
        title: 'Diff',
        text: price.diff.toString(),
      },
    ],
  });
};

const fromCoingecko = () => {
  const coingeckoClient = new CoinGeckoClient({
    timeout: 10000,
    autoRetry: true,
  });
  return coingeckoClient.simplePrice({
    vs_currencies: 'usd',
    ids: assetInfo.map((info) => info.coingeckoId).join(','),
  });
};

const fromOracle = async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    'https://rpc.astar.network:8545'
  );
  const diaOracleInstance = IDiaAggregatorFactory.connect(
    addressConfig.oracleAddress,
    provider
  );
  const multiCallInstance = MulticallFactory.connect(
    addressConfig.multiCallAddress,
    provider
  );
  const encodedCallParams = assetInfo.map((a) => {
    return diaOracleInstance.interface.encodeFunctionData('getValue', [
      `${a.asset}/USD`,
    ]);
  });
  const results = await multiCallInstance.callStatic.aggregate(
    encodedCallParams.map((p) => {
      return {
        target: addressConfig.oracleAddress,
        callData: p,
      };
    })
  );
  return results.returnData.map((d) => {
    return diaOracleInstance.interface.decodeFunctionResult('getValue', d);
  });
};
