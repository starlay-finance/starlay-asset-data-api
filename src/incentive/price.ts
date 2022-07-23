import BigNumberJs from 'bignumber.js'
import { BytesLike, providers } from 'ethers'
import { IERC20__factory } from '../types/IERC20__factory'
import { MulticallFactory } from '../types/MulticallFactory'

export const getPriceFromArthSwap = async (
  token: string,
  quoteToken: string,
  poolAddress: string,
  quoteTokenPriceInUSD: BigNumberJs,
  multicallAddress: string,
  provider: providers.JsonRpcProvider,
) => {
  const multicall = MulticallFactory.connect(multicallAddress, provider)
  const iERC20 = IERC20__factory.createInterface()

  const { returnData } = await multicall.callStatic.aggregate([
    toCall(token, iERC20.encodeFunctionData('decimals')),
    toCall(token, iERC20.encodeFunctionData('balanceOf', [poolAddress])),
    toCall(quoteToken, iERC20.encodeFunctionData('decimals')),
    toCall(quoteToken, iERC20.encodeFunctionData('balanceOf', [poolAddress])),
  ])

  const [tokenDecimals] = iERC20.decodeFunctionResult('decimals', returnData[0])
  const [tokenBalance] = iERC20.decodeFunctionResult('balanceOf', returnData[1])
  const [quoteTokenDecimals] = iERC20.decodeFunctionResult(
    'decimals',
    returnData[2],
  )
  const [quoteTokenBalance] = iERC20.decodeFunctionResult(
    'balanceOf',
    returnData[3],
  )

  if (tokenBalance.isZero()) return new BigNumberJs('0')

  const priceInQuoteToken = new BigNumberJs(quoteTokenBalance.toString())
    .shiftedBy(-quoteTokenDecimals)
    .div(new BigNumberJs(tokenBalance.toString()).shiftedBy(-tokenDecimals))
  return priceInQuoteToken.times(quoteTokenPriceInUSD)
}

export const toCall = (target: string, callData: BytesLike) => ({
  callData,
  target,
})
