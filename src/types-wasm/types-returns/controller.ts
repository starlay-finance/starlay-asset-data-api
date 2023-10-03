import type BN from 'bn.js';
import type {ReturnNumber} from '@727-ventures/typechain-types';

export type AccountId = string | number[]

export type WrappedU256 = U256;

export type U256 = ReturnNumber;

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export enum Error {
	mintIsPaused = 'MintIsPaused',
	borrowIsPaused = 'BorrowIsPaused',
	seizeIsPaused = 'SeizeIsPaused',
	transferIsPaused = 'TransferIsPaused',
	marketNotListed = 'MarketNotListed',
	marketAlreadyListed = 'MarketAlreadyListed',
	controllerMismatch = 'ControllerMismatch',
	priceError = 'PriceError',
	tooMuchRepay = 'TooMuchRepay',
	borrowCapReached = 'BorrowCapReached',
	insufficientLiquidity = 'InsufficientLiquidity',
	insufficientShortfall = 'InsufficientShortfall',
	callerIsNotManager = 'CallerIsNotManager',
	invalidCollateralFactor = 'InvalidCollateralFactor',
	underlyingIsNotSet = 'UnderlyingIsNotSet',
	poolIsNotSet = 'PoolIsNotSet',
	managerIsNotSet = 'ManagerIsNotSet',
	oracleIsNotSet = 'OracleIsNotSet'
}

export type PoolAttributesForSeizeCalculation = {
	underlying: AccountId | null,
	decimals: number
}

export type PoolAttributes = {
	underlying: AccountId | null,
	decimals: number,
	accountBalance: ReturnNumber,
	accountBorrowBalance: ReturnNumber,
	exchangeRate: U256,
	totalBorrows: ReturnNumber
}

export type PoolAttributesForWithdrawValidation = {
	pool: AccountId | null,
	underlying: AccountId | null,
	liquidationThreshold: ReturnNumber,
	accountBalance: ReturnNumber,
	accountBorrowBalance: ReturnNumber
}

export type AccountData = {
	totalCollateralInBaseCurrency: U256,
	totalDebtInBaseCurrency: U256,
	avgLtv: U256,
	avgLiquidationThreshold: U256,
	healthFactor: U256
}

