/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@727-ventures/typechain-types';
import { buildSubmittableExtrinsic } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/pool';
import type BN from 'bn.js';
import type { ApiPromise } from '@polkadot/api';



export default class Methods {
	readonly __nativeContract : ContractPromise;
	readonly __apiPromise: ApiPromise;

	constructor(
		nativeContract : ContractPromise,
		apiPromise: ApiPromise,
	) {
		this.__nativeContract = nativeContract;
		this.__apiPromise = apiPromise;
	}
	/**
	 * reduceReserves
	 *
	 * @param { (string | number | BN) } amount,
	*/
	"reduceReserves" (
		amount: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::reduceReserves", [amount], __options);
	}

	/**
	 * addReserves
	 *
	 * @param { (string | number | BN) } amount,
	*/
	"addReserves" (
		amount: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::addReserves", [amount], __options);
	}

	/**
	 * mintTo
	 *
	 * @param { ArgumentTypes.AccountId } mintAccount,
	 * @param { (string | number | BN) } mintAmount,
	*/
	"mintTo" (
		mintAccount: ArgumentTypes.AccountId,
		mintAmount: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::mintTo", [mintAccount, mintAmount], __options);
	}

	/**
	 * getCashPrior
	 *
	*/
	"getCashPrior" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::getCashPrior", [], __options);
	}

	/**
	 * setIncentivesController
	 *
	 * @param { ArgumentTypes.AccountId } incentivesController,
	*/
	"setIncentivesController" (
		incentivesController: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::setIncentivesController", [incentivesController], __options);
	}

	/**
	 * manager
	 *
	*/
	"manager" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::manager", [], __options);
	}

	/**
	 * redeem
	 *
	 * @param { (string | number | BN) } redeemTokens,
	*/
	"redeem" (
		redeemTokens: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::redeem", [redeemTokens], __options);
	}

	/**
	 * getAccrualBlockTimestamp
	 *
	*/
	"getAccrualBlockTimestamp" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::getAccrualBlockTimestamp", [], __options);
	}

	/**
	 * borrowRatePerMsec
	 *
	*/
	"borrowRatePerMsec" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::borrowRatePerMsec", [], __options);
	}

	/**
	 * exchangeRateStored
	 *
	*/
	"exchangeRateStored" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::exchangeRateStored", [], __options);
	}

	/**
	 * repayBorrow
	 *
	 * @param { (string | number | BN) } repayAmount,
	*/
	"repayBorrow" (
		repayAmount: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::repayBorrow", [repayAmount], __options);
	}

	/**
	 * setReserveFactorMantissa
	 *
	 * @param { ArgumentTypes.WrappedU256 } newReserveFactorMantissa,
	*/
	"setReserveFactorMantissa" (
		newReserveFactorMantissa: ArgumentTypes.WrappedU256,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::setReserveFactorMantissa", [newReserveFactorMantissa], __options);
	}

	/**
	 * liquidationThreshold
	 *
	*/
	"liquidationThreshold" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::liquidationThreshold", [], __options);
	}

	/**
	 * delegateAllowance
	 *
	 * @param { ArgumentTypes.AccountId } owner,
	 * @param { ArgumentTypes.AccountId } delegatee,
	*/
	"delegateAllowance" (
		owner: ArgumentTypes.AccountId,
		delegatee: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::delegateAllowance", [owner, delegatee], __options);
	}

	/**
	 * borrowFor
	 *
	 * @param { ArgumentTypes.AccountId } borrower,
	 * @param { (string | number | BN) } borrowAmount,
	*/
	"borrowFor" (
		borrower: ArgumentTypes.AccountId,
		borrowAmount: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::borrowFor", [borrower, borrowAmount], __options);
	}

	/**
	 * incentivesController
	 *
	*/
	"incentivesController" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::incentivesController", [], __options);
	}

	/**
	 * underlying
	 *
	*/
	"underlying" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::underlying", [], __options);
	}

	/**
	 * seize
	 *
	 * @param { ArgumentTypes.AccountId } liquidator,
	 * @param { ArgumentTypes.AccountId } borrower,
	 * @param { (string | number | BN) } seizeTokens,
	*/
	"seize" (
		liquidator: ArgumentTypes.AccountId,
		borrower: ArgumentTypes.AccountId,
		seizeTokens: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::seize", [liquidator, borrower, seizeTokens], __options);
	}

	/**
	 * increaseDelegateAllowance
	 *
	 * @param { ArgumentTypes.AccountId } owner,
	 * @param { ArgumentTypes.AccountId } delegatee,
	 * @param { (string | number | BN) } amount,
	*/
	"increaseDelegateAllowance" (
		owner: ArgumentTypes.AccountId,
		delegatee: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::increaseDelegateAllowance", [owner, delegatee, amount], __options);
	}

	/**
	 * borrowForFlashloan
	 *
	 * @param { ArgumentTypes.AccountId } borrower,
	 * @param { (string | number | BN) } borrowAmount,
	*/
	"borrowForFlashloan" (
		borrower: ArgumentTypes.AccountId,
		borrowAmount: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::borrowForFlashloan", [borrower, borrowAmount], __options);
	}

	/**
	 * totalReserves
	 *
	*/
	"totalReserves" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::totalReserves", [], __options);
	}

	/**
	 * controller
	 *
	*/
	"controller" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::controller", [], __options);
	}

	/**
	 * setController
	 *
	 * @param { ArgumentTypes.AccountId } newController,
	*/
	"setController" (
		newController: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::setController", [newController], __options);
	}

	/**
	 * sweepToken
	 *
	 * @param { ArgumentTypes.AccountId } asset,
	*/
	"sweepToken" (
		asset: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::sweepToken", [asset], __options);
	}

	/**
	 * totalBorrows
	 *
	*/
	"totalBorrows" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::totalBorrows", [], __options);
	}

	/**
	 * supplyRatePerMsec
	 *
	*/
	"supplyRatePerMsec" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::supplyRatePerMsec", [], __options);
	}

	/**
	 * principalTotalSupply
	 *
	*/
	"principalTotalSupply" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::principalTotalSupply", [], __options);
	}

	/**
	 * decreaseDelegateAllowance
	 *
	 * @param { ArgumentTypes.AccountId } owner,
	 * @param { ArgumentTypes.AccountId } delegatee,
	 * @param { (string | number | BN) } amount,
	*/
	"decreaseDelegateAllowance" (
		owner: ArgumentTypes.AccountId,
		delegatee: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::decreaseDelegateAllowance", [owner, delegatee, amount], __options);
	}

	/**
	 * repayBorrowAll
	 *
	*/
	"repayBorrowAll" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::repayBorrowAll", [], __options);
	}

	/**
	 * setLiquidationThreshold
	 *
	 * @param { (string | number | BN) } newLiquidationThreshold,
	*/
	"setLiquidationThreshold" (
		newLiquidationThreshold: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::setLiquidationThreshold", [newLiquidationThreshold], __options);
	}

	/**
	 * approveDelegate
	 *
	 * @param { ArgumentTypes.AccountId } delegatee,
	 * @param { (string | number | BN) } amount,
	*/
	"approveDelegate" (
		delegatee: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::approveDelegate", [delegatee, amount], __options);
	}

	/**
	 * principalBalanceOf
	 *
	 * @param { ArgumentTypes.AccountId } account,
	*/
	"principalBalanceOf" (
		account: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::principalBalanceOf", [account], __options);
	}

	/**
	 * reserveFactorMantissa
	 *
	*/
	"reserveFactorMantissa" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::reserveFactorMantissa", [], __options);
	}

	/**
	 * usingReserveAsCollateral
	 *
	 * @param { ArgumentTypes.AccountId } user,
	*/
	"usingReserveAsCollateral" (
		user: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::usingReserveAsCollateral", [user], __options);
	}

	/**
	 * liquidateBorrow
	 *
	 * @param { ArgumentTypes.AccountId } borrower,
	 * @param { (string | number | BN) } repayAmount,
	 * @param { ArgumentTypes.AccountId } collateral,
	*/
	"liquidateBorrow" (
		borrower: ArgumentTypes.AccountId,
		repayAmount: (string | number | BN),
		collateral: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::liquidateBorrow", [borrower, repayAmount, collateral], __options);
	}

	/**
	 * borrow
	 *
	 * @param { (string | number | BN) } borrowAmount,
	*/
	"borrow" (
		borrowAmount: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::borrow", [borrowAmount], __options);
	}

	/**
	 * redeemAll
	 *
	*/
	"redeemAll" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::redeemAll", [], __options);
	}

	/**
	 * mint
	 *
	 * @param { (string | number | BN) } mintAmount,
	*/
	"mint" (
		mintAmount: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::mint", [mintAmount], __options);
	}

	/**
	 * redeemUnderlying
	 *
	 * @param { (string | number | BN) } redeemAmount,
	*/
	"redeemUnderlying" (
		redeemAmount: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::redeemUnderlying", [redeemAmount], __options);
	}

	/**
	 * setUseReserveAsCollateral
	 *
	 * @param { boolean } useAsCollateral,
	*/
	"setUseReserveAsCollateral" (
		useAsCollateral: boolean,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::setUseReserveAsCollateral", [useAsCollateral], __options);
	}

	/**
	 * exchangeRateCurrent
	 *
	*/
	"exchangeRateCurrent" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::exchangeRateCurrent", [], __options);
	}

	/**
	 * borrowBalanceStored
	 *
	 * @param { ArgumentTypes.AccountId } account,
	*/
	"borrowBalanceStored" (
		account: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::borrowBalanceStored", [account], __options);
	}

	/**
	 * transferUnderlying
	 *
	 * @param { ArgumentTypes.AccountId } to,
	 * @param { (string | number | BN) } amount,
	*/
	"transferUnderlying" (
		to: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::transferUnderlying", [to, amount], __options);
	}

	/**
	 * borrowBalanceCurrent
	 *
	 * @param { ArgumentTypes.AccountId } account,
	*/
	"borrowBalanceCurrent" (
		account: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::borrowBalanceCurrent", [account], __options);
	}

	/**
	 * initialExchangeRateMantissa
	 *
	*/
	"initialExchangeRateMantissa" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::initialExchangeRateMantissa", [], __options);
	}

	/**
	 * borrowsScaled
	 *
	*/
	"borrowsScaled" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::borrowsScaled", [], __options);
	}

	/**
	 * repayBorrowBehalf
	 *
	 * @param { ArgumentTypes.AccountId } borrower,
	 * @param { (string | number | BN) } repayAmount,
	*/
	"repayBorrowBehalf" (
		borrower: ArgumentTypes.AccountId,
		repayAmount: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::repayBorrowBehalf", [borrower, repayAmount], __options);
	}

	/**
	 * setInterestRateModel
	 *
	 * @param { ArgumentTypes.AccountId } newInterestRateModel,
	*/
	"setInterestRateModel" (
		newInterestRateModel: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::setInterestRateModel", [newInterestRateModel], __options);
	}

	/**
	 * getAccountSnapshot
	 *
	 * @param { ArgumentTypes.AccountId } account,
	*/
	"getAccountSnapshot" (
		account: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::getAccountSnapshot", [account], __options);
	}

	/**
	 * accrueInterest
	 *
	*/
	"accrueInterest" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "pool::accrueInterest", [], __options);
	}

	/**
	 * increaseAllowance
	 *
	 * @param { ArgumentTypes.AccountId } spender,
	 * @param { (string | number | BN) } deltaValue,
	*/
	"increaseAllowance" (
		spender: ArgumentTypes.AccountId,
		deltaValue: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp22::increaseAllowance", [spender, deltaValue], __options);
	}

	/**
	 * decreaseAllowance
	 *
	 * @param { ArgumentTypes.AccountId } spender,
	 * @param { (string | number | BN) } deltaValue,
	*/
	"decreaseAllowance" (
		spender: ArgumentTypes.AccountId,
		deltaValue: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp22::decreaseAllowance", [spender, deltaValue], __options);
	}

	/**
	 * totalSupply
	 *
	*/
	"totalSupply" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp22::totalSupply", [], __options);
	}

	/**
	 * transfer
	 *
	 * @param { ArgumentTypes.AccountId } to,
	 * @param { (string | number | BN) } value,
	 * @param { Array<(number | string | BN)> } data,
	*/
	"transfer" (
		to: ArgumentTypes.AccountId,
		value: (string | number | BN),
		data: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp22::transfer", [to, value, data], __options);
	}

	/**
	 * transferFrom
	 *
	 * @param { ArgumentTypes.AccountId } from,
	 * @param { ArgumentTypes.AccountId } to,
	 * @param { (string | number | BN) } value,
	 * @param { Array<(number | string | BN)> } data,
	*/
	"transferFrom" (
		from: ArgumentTypes.AccountId,
		to: ArgumentTypes.AccountId,
		value: (string | number | BN),
		data: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp22::transferFrom", [from, to, value, data], __options);
	}

	/**
	 * balanceOf
	 *
	 * @param { ArgumentTypes.AccountId } owner,
	*/
	"balanceOf" (
		owner: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp22::balanceOf", [owner], __options);
	}

	/**
	 * approve
	 *
	 * @param { ArgumentTypes.AccountId } spender,
	 * @param { (string | number | BN) } value,
	*/
	"approve" (
		spender: ArgumentTypes.AccountId,
		value: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp22::approve", [spender, value], __options);
	}

	/**
	 * allowance
	 *
	 * @param { ArgumentTypes.AccountId } owner,
	 * @param { ArgumentTypes.AccountId } spender,
	*/
	"allowance" (
		owner: ArgumentTypes.AccountId,
		spender: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp22::allowance", [owner, spender], __options);
	}

	/**
	 * tokenName
	 *
	*/
	"tokenName" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp22Metadata::tokenName", [], __options);
	}

	/**
	 * tokenSymbol
	 *
	*/
	"tokenSymbol" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp22Metadata::tokenSymbol", [], __options);
	}

	/**
	 * tokenDecimals
	 *
	*/
	"tokenDecimals" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp22Metadata::tokenDecimals", [], __options);
	}

}