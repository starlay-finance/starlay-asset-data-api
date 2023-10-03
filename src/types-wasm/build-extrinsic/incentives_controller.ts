/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@727-ventures/typechain-types';
import { buildSubmittableExtrinsic } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/incentives_controller';
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
	 * setOk
	 *
	 * @param { boolean } isOk,
	*/
	"setOk" (
		isOk: boolean,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "setOk", [isOk], __options);
	}

	/**
	 * handleAction
	 *
	 * @param { ArgumentTypes.AccountId } user,
	 * @param { (string | number | BN) } totalDeposit,
	 * @param { (string | number | BN) } totalBorrow,
	 * @param { (string | number | BN) } userDeposit,
	 * @param { (string | number | BN) } userBorrow,
	*/
	"handleAction" (
		user: ArgumentTypes.AccountId,
		totalDeposit: (string | number | BN),
		totalBorrow: (string | number | BN),
		userDeposit: (string | number | BN),
		userBorrow: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "incentivesController::handleAction", [user, totalDeposit, totalBorrow, userDeposit, userBorrow], __options);
	}

}