/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@727-ventures/typechain-types';
import { buildSubmittableExtrinsic } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/flashloan_receiver';
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
	 * setFailExecutionTransfer
	 *
	 * @param { boolean } fail,
	*/
	"setFailExecutionTransfer" (
		fail: boolean,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "setFailExecutionTransfer", [fail], __options);
	}

	/**
	 * failExecutionTransfer
	 *
	*/
	"failExecutionTransfer" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "failExecutionTransfer", [], __options);
	}

	/**
	 * executeOperation
	 *
	 * @param { Array<ArgumentTypes.AccountId> } assets,
	 * @param { Array<(string | number | BN)> } amounts,
	 * @param { Array<(string | number | BN)> } premiums,
	 * @param { ArgumentTypes.AccountId } initiator,
	 * @param { Array<(number | string | BN)> } params,
	*/
	"executeOperation" (
		assets: Array<ArgumentTypes.AccountId>,
		amounts: Array<(string | number | BN)>,
		premiums: Array<(string | number | BN)>,
		initiator: ArgumentTypes.AccountId,
		params: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "flashloanReceiver::executeOperation", [assets, amounts, premiums, initiator, params], __options);
	}

}