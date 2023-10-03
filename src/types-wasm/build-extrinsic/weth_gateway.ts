/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@727-ventures/typechain-types';
import { buildSubmittableExtrinsic } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/weth_gateway';
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
	 * owner
	 *
	*/
	"owner" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "ownable::owner", [], __options);
	}

	/**
	 * renounceOwnership
	 *
	*/
	"renounceOwnership" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "ownable::renounceOwnership", [], __options);
	}

	/**
	 * transferOwnership
	 *
	 * @param { ArgumentTypes.AccountId } newOwner,
	*/
	"transferOwnership" (
		newOwner: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "ownable::transferOwnership", [newOwner], __options);
	}

	/**
	 * emergencyTokenTransfer
	 *
	 * @param { ArgumentTypes.AccountId } token,
	 * @param { ArgumentTypes.AccountId } to,
	 * @param { (string | number | BN) } amount,
	*/
	"emergencyTokenTransfer" (
		token: ArgumentTypes.AccountId,
		to: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "wethGateway::emergencyTokenTransfer", [token, to, amount], __options);
	}

	/**
	 * getWethAddress
	 *
	*/
	"getWethAddress" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "wethGateway::getWethAddress", [], __options);
	}

	/**
	 * withdrawEth
	 *
	 * @param { ArgumentTypes.AccountId } pool,
	 * @param { (string | number | BN) } amount,
	*/
	"withdrawEth" (
		pool: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "wethGateway::withdrawEth", [pool, amount], __options);
	}

	/**
	 * depositEth
	 *
	 * @param { ArgumentTypes.AccountId } pool,
	*/
	"depositEth" (
		pool: ArgumentTypes.AccountId,
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "wethGateway::depositEth", [pool], __options);
	}

	/**
	 * borrowEth
	 *
	 * @param { ArgumentTypes.AccountId } pool,
	 * @param { (string | number | BN) } amount,
	*/
	"borrowEth" (
		pool: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "wethGateway::borrowEth", [pool, amount], __options);
	}

	/**
	 * emergencyEtherTransfer
	 *
	 * @param { ArgumentTypes.AccountId } to,
	 * @param { (string | number | BN) } amount,
	*/
	"emergencyEtherTransfer" (
		to: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "wethGateway::emergencyEtherTransfer", [to, amount], __options);
	}

	/**
	 * repayEth
	 *
	 * @param { ArgumentTypes.AccountId } pool,
	 * @param { (string | number | BN) } amount,
	*/
	"repayEth" (
		pool: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "wethGateway::repayEth", [pool, amount], __options);
	}

}