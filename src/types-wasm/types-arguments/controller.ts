import type BN from 'bn.js';

export type AccountId = string | number[]

export type WrappedU256 = U256;

export type U256 = Array<(number | string | BN)>;

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
	decimals: (number | string | BN)
}

export type PoolAttributes = {
	underlying: AccountId | null,
	decimals: (number | string | BN),
	accountBalance: (string | number | BN),
	accountBorrowBalance: (string | number | BN),
	exchangeRate: U256,
	totalBorrows: (string | number | BN)
}

export type PoolAttributesForWithdrawValidation = {
	pool: AccountId | null,
	underlying: AccountId | null,
	liquidationThreshold: (string | number | BN),
	accountBalance: (string | number | BN),
	accountBorrowBalance: (string | number | BN)
}

export type AccountData = {
	totalCollateralInBaseCurrency: U256,
	totalDebtInBaseCurrency: U256,
	avgLtv: U256,
	avgLiquidationThreshold: U256,
	healthFactor: U256
}
