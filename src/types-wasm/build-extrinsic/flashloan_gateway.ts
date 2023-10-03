/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@727-ventures/typechain-types';
import { buildSubmittableExtrinsic } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/flashloan_gateway';
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
	 * flashloan
	 *
	 * @param { ArgumentTypes.AccountId } receiverAddress,
	 * @param { Array<ArgumentTypes.AccountId> } assets,
	 * @param { Array<(string | number | BN)> } amounts,
	 * @param { Array<(number | string | BN)> } mods,
	 * @param { ArgumentTypes.AccountId } onBehalfOf,
	 * @param { Array<(number | string | BN)> } params,
	*/
	"flashloan" (
		receiverAddress: ArgumentTypes.AccountId,
		assets: Array<ArgumentTypes.AccountId>,
		amounts: Array<(string | number | BN)>,
		mods: Array<(number | string | BN)>,
		onBehalfOf: ArgumentTypes.AccountId,
		params: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "flashloanGateway::flashloan", [receiverAddress, assets, amounts, mods, onBehalfOf, params], __options);
	}

	/**
	 * flashloanPremiumTotal
	 *
	*/
	"flashloanPremiumTotal" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "flashloanGateway::flashloanPremiumTotal", [], __options);
	}

	/**
	 * controller
	 *
	*/
	"controller" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "flashloanGateway::controller", [], __options);
	}

}