import type BN from 'bn.js';
import type {ReturnNumber} from '@727-ventures/typechain-types';

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export type AccountId = string | number[]

export type PoolMetadata = {
	pool: AccountId,
	poolDecimals: number,
	underlyingAssetAddress: AccountId | null,
	underlyingDecimals: number,
	underlyingSymbol: string,
	isListed: boolean,
	totalCash: ReturnNumber,
	totalSupply: ReturnNumber,
	totalBorrows: ReturnNumber,
	totalReserves: ReturnNumber,
	exchangeRateCurrent: WrappedU256,
	supplyRatePerMsec: WrappedU256,
	borrowRatePerMsec: WrappedU256,
	collateralFactorMantissa: WrappedU256,
	reserveFactorMantissa: WrappedU256,
	borrowCap: ReturnNumber | null,
	mintGuardianPaused: boolean,
	borrowGuardianPaused: boolean
}

export type WrappedU256 = U256;

export type U256 = ReturnNumber;

export type PoolBalances = {
	pool: AccountId,
	balanceOf: ReturnNumber,
	borrowBalanceCurrent: ReturnNumber,
	tokenBalance: ReturnNumber,
	tokenAllowance: ReturnNumber
}

export type PoolUnderlyingPrice = {
	pool: AccountId,
	underlyingPrice: ReturnNumber
}

export type Configuration = {
	manager: AccountId | null,
	oracle: AccountId | null,
	seizeGuardianPaused: boolean,
	transferGuardianPaused: boolean,
	liquidationIncentiveMantissa: WrappedU256,
	closeFactorMantissa: WrappedU256
}

