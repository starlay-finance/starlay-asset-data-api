import type BN from 'bn.js';

export type AccountId = string | number[]

export type WrappedU256 = U256;

export type U256 = Array<(number | string | BN)>;

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export interface pool_Error {
	notImplemented ? : null,
	invalidParameter ? : null,
	borrowCashNotAvailable ? : null,
	redeemTransferOutNotPossible ? : null,
	liquidateLiquidatorIsBorrower ? : null,
	liquidateCloseAmountIsZero ? : null,
	accrualBlockNumberIsNotFresh ? : null,
	liquidateSeizeLiquidatorIsBorrower ? : null,
	reduceReservesCashNotAvailable ? : null,
	reduceReservesCashValidation ? : null,
	borrowRateIsAbsurdlyHigh ? : null,
	setReserveFactorBoundsCheck ? : null,
	cannotSweepUnderlyingToken ? : null,
	callerIsNotManager ? : null,
	zeroOwnerAddress ? : null,
	zeroDelegateeAddress ? : null,
	insufficientDelegateAllowance ? : null,
	depositAlreadyInUse ? : null,
	callerIsNotFlashloanGateway ? : null,
	controllerIsNotSet ? : null,
	interestRateModelIsNotSet ? : null,
	underlyingIsNotSet ? : null,
	managerIsNotSet ? : null,
	incentivesControllerIsNotSet ? : null,
	accrueRewardFailed ? : null,
	controller ? : controller_Error,
	psp22 ? : PSP22Error,
	lang ? : LangError
}

export class pool_ErrorBuilder {
	static NotImplemented(): pool_Error {
		return {
			notImplemented: null,
		};
	}
	static InvalidParameter(): pool_Error {
		return {
			invalidParameter: null,
		};
	}
	static BorrowCashNotAvailable(): pool_Error {
		return {
			borrowCashNotAvailable: null,
		};
	}
	static RedeemTransferOutNotPossible(): pool_Error {
		return {
			redeemTransferOutNotPossible: null,
		};
	}
	static LiquidateLiquidatorIsBorrower(): pool_Error {
		return {
			liquidateLiquidatorIsBorrower: null,
		};
	}
	static LiquidateCloseAmountIsZero(): pool_Error {
		return {
			liquidateCloseAmountIsZero: null,
		};
	}
	static AccrualBlockNumberIsNotFresh(): pool_Error {
		return {
			accrualBlockNumberIsNotFresh: null,
		};
	}
	static LiquidateSeizeLiquidatorIsBorrower(): pool_Error {
		return {
			liquidateSeizeLiquidatorIsBorrower: null,
		};
	}
	static ReduceReservesCashNotAvailable(): pool_Error {
		return {
			reduceReservesCashNotAvailable: null,
		};
	}
	static ReduceReservesCashValidation(): pool_Error {
		return {
			reduceReservesCashValidation: null,
		};
	}
	static BorrowRateIsAbsurdlyHigh(): pool_Error {
		return {
			borrowRateIsAbsurdlyHigh: null,
		};
	}
	static SetReserveFactorBoundsCheck(): pool_Error {
		return {
			setReserveFactorBoundsCheck: null,
		};
	}
	static CannotSweepUnderlyingToken(): pool_Error {
		return {
			cannotSweepUnderlyingToken: null,
		};
	}
	static CallerIsNotManager(): pool_Error {
		return {
			callerIsNotManager: null,
		};
	}
	static ZeroOwnerAddress(): pool_Error {
		return {
			zeroOwnerAddress: null,
		};
	}
	static ZeroDelegateeAddress(): pool_Error {
		return {
			zeroDelegateeAddress: null,
		};
	}
	static InsufficientDelegateAllowance(): pool_Error {
		return {
			insufficientDelegateAllowance: null,
		};
	}
	static DepositAlreadyInUse(): pool_Error {
		return {
			depositAlreadyInUse: null,
		};
	}
	static CallerIsNotFlashloanGateway(): pool_Error {
		return {
			callerIsNotFlashloanGateway: null,
		};
	}
	static ControllerIsNotSet(): pool_Error {
		return {
			controllerIsNotSet: null,
		};
	}
	static InterestRateModelIsNotSet(): pool_Error {
		return {
			interestRateModelIsNotSet: null,
		};
	}
	static UnderlyingIsNotSet(): pool_Error {
		return {
			underlyingIsNotSet: null,
		};
	}
	static ManagerIsNotSet(): pool_Error {
		return {
			managerIsNotSet: null,
		};
	}
	static IncentivesControllerIsNotSet(): pool_Error {
		return {
			incentivesControllerIsNotSet: null,
		};
	}
	static AccrueRewardFailed(): pool_Error {
		return {
			accrueRewardFailed: null,
		};
	}
	static Controller(value: controller_Error): pool_Error {
		return {
			controller: value,
		};
	}
	static PSP22(value: PSP22Error): pool_Error {
		return {
			psp22: value,
		};
	}
	static Lang(value: LangError): pool_Error {
		return {
			lang: value,
		};
	}
}

export enum controller_Error {
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

export interface PSP22Error {
	custom ? : string,
	insufficientBalance ? : null,
	insufficientAllowance ? : null,
	zeroRecipientAddress ? : null,
	zeroSenderAddress ? : null,
	safeTransferCheckFailed ? : string
}

export class PSP22ErrorBuilder {
	static Custom(value: string): PSP22Error {
		return {
			custom: value,
		};
	}
	static InsufficientBalance(): PSP22Error {
		return {
			insufficientBalance: null,
		};
	}
	static InsufficientAllowance(): PSP22Error {
		return {
			insufficientAllowance: null,
		};
	}
	static ZeroRecipientAddress(): PSP22Error {
		return {
			zeroRecipientAddress: null,
		};
	}
	static ZeroSenderAddress(): PSP22Error {
		return {
			zeroSenderAddress: null,
		};
	}
	static SafeTransferCheckFailed(value: string): PSP22Error {
		return {
			safeTransferCheckFailed: value,
		};
	}
}

