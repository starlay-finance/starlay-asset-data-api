/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@727-ventures/typechain-types';
import { buildSubmittableExtrinsic } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/leverager';
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
	 * fund
	 *
	*/
	"fund" (
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "fund", [], __options);
	}

	/**
	 * initialize
	 *
	 * @param { ArgumentTypes.AccountId | null } controller,
	 * @param { ArgumentTypes.AccountId | null } priceOracle,
	 * @param { ArgumentTypes.AccountId | null } weth,
	*/
	"initialize" (
		controller: ArgumentTypes.AccountId | null,
		priceOracle: ArgumentTypes.AccountId | null,
		weth: ArgumentTypes.AccountId | null,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "leverager::initialize", [controller, priceOracle, weth], __options);
	}

	/**
	 * loopEth
	 *
	 * @param { (string | number | BN) } borrowRatio,
	 * @param { (string | number | BN) } loopCount,
	*/
	"loopEth" (
		borrowRatio: (string | number | BN),
		loopCount: (string | number | BN),
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "leverager::loopEth", [borrowRatio, loopCount], __options);
	}

	/**
	 * controller
	 *
	*/
	"controller" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "leverager::controller", [], __options);
	}

	/**
	 * getHealthFactor
	 *
	 * @param { ArgumentTypes.AccountId } account,
	 * @param { ArgumentTypes.AccountId } asset,
	 * @param { (string | number | BN) } withdrawAmount,
	*/
	"getHealthFactor" (
		account: ArgumentTypes.AccountId,
		asset: ArgumentTypes.AccountId,
		withdrawAmount: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "leverager::getHealthFactor", [account, asset, withdrawAmount], __options);
	}

	/**
	 * close
	 *
	 * @param { ArgumentTypes.AccountId } asset,
	*/
	"close" (
		asset: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "leverager::close", [asset], __options);
	}

	/**
	 * priceOracle
	 *
	*/
	"priceOracle" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "leverager::priceOracle", [], __options);
	}

	/**
	 * loopAsset
	 *
	 * @param { ArgumentTypes.AccountId } asset,
	 * @param { (string | number | BN) } amount,
	 * @param { (string | number | BN) } borrowRatio,
	 * @param { (string | number | BN) } loopCount,
	*/
	"loopAsset" (
		asset: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		borrowRatio: (string | number | BN),
		loopCount: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "leverager::loopAsset", [asset, amount, borrowRatio, loopCount], __options);
	}

	/**
	 * wethAddress
	 *
	*/
	"wethAddress" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "leverager::wethAddress", [], __options);
	}

	/**
	 * manager
	 *
	*/
	"manager" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "leverager::manager", [], __options);
	}

	/**
	 * getAvailableBorrows
	 *
	 * @param { ArgumentTypes.AccountId } account,
	*/
	"getAvailableBorrows" (
		account: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "leverager::getAvailableBorrows", [account], __options);
	}

	/**
	 * withdrawable
	 *
	 * @param { ArgumentTypes.AccountId } account,
	 * @param { ArgumentTypes.AccountId } asset,
	*/
	"withdrawable" (
		account: ArgumentTypes.AccountId,
		asset: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "leverager::withdrawable", [account, asset], __options);
	}

	/**
	 * withdrawableAmount
	 *
	 * @param { ArgumentTypes.AccountId } account,
	 * @param { ArgumentTypes.AccountId } asset,
	*/
	"withdrawableAmount" (
		account: ArgumentTypes.AccountId,
		asset: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "leverager::withdrawableAmount", [account, asset], __options);
	}

	/**
	 * loanToValue
	 *
	 * @param { ArgumentTypes.AccountId } asset,
	*/
	"loanToValue" (
		asset: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "leverager::loanToValue", [asset], __options);
	}

	/**
	 * liquidationThreshold
	 *
	 * @param { ArgumentTypes.AccountId } asset,
	*/
	"liquidationThreshold" (
		asset: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "leverager::liquidationThreshold", [asset], __options);
	}

}