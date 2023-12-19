import { ApiPromise, Keyring, WsProvider } from '@polkadot/api'
import { DynamoDB } from 'aws-sdk'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { ethers } from 'ethers'
import Controller from '../types-wasm/contracts/controller'
import { LendingPoolFactory } from '../types/LendingPoolFactory'
import { MulticallFactory } from '../types/MulticallFactory'
import { recordHealthFactorEVM } from './helathfactor_evm'
import { recordStatsEVM } from './statistics_evm'
import { recordStatsWASM } from './statistics_wasm'

dayjs.extend(utc)
dayjs.extend(timezone)

const ddbdc = new DynamoDB.DocumentClient()

const handlerEVM = async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    'https://evm.astar.network',
  )
  const lendingPoolAddress = '0x90384334333f3356eFDD5b20016350843b90f182'
  const multiCallAddress = '0x7D6046156df81EF335E7e765d3bc714960B73207'
  const multiCall = MulticallFactory.connect(multiCallAddress, provider)
  const lendingPool = LendingPoolFactory.connect(lendingPoolAddress, provider)
  const timestamp = dayjs().unix()
  const currentBlock = await provider.getBlockNumber()

  const { uniqueBorrowers } = await recordStatsEVM(
    ddbdc,
    lendingPool,
    currentBlock,
    timestamp,
  )
  await recordHealthFactorEVM(
    ddbdc,
    uniqueBorrowers,
    lendingPool,
    multiCall,
    timestamp,
  )
}

const handlerWASM = async () => {
  const wsProvider = new WsProvider('wss://shibuya-rpc.dwellir.com')
  const api = await ApiPromise.create({
    provider: wsProvider,
    throwOnConnect: true,
  })
  const keyring = new Keyring({ type: 'sr25519' })
  const signer = keyring.addFromUri('//Alice')
  const controllerAddress = 'akVUD7MNuxpwqwkBsJjmG7aCmEx63Jr643rLVZp33z1nhRF'
  const controller = new Controller(controllerAddress, signer, api)
  const timestamp = dayjs().unix()
  const currentBlock = (
    await api.rpc.chain.getBlock()
  ).block.header.number.toNumber()

  const { uniqueBorrowers } = await recordStatsWASM(
    ddbdc,
    controller,
    signer,
    api,
    currentBlock,
    timestamp,
  )
  console.log('uniqueBorrowers', uniqueBorrowers)

  await api.disconnect()
}

export const handler = async () => {
  await handlerEVM()
  // await handlerWASM()
}
