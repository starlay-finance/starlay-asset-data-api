/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import { txSignAndSend } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/flashloan_gateway';
import type BN from 'bn.js';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";
import EVENT_DATA_TYPE_DESCRIPTIONS from '../event-data/flashloan_gateway.json';


export default class Methods {
	readonly __nativeContract : ContractPromise;
	readonly __keyringPair : KeyringPair;
	readonly __apiPromise: ApiPromise;

	constructor(
		apiPromise: ApiPromise,
		nativeContract : ContractPromise,
		keyringPair : KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
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
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "flashloanGateway::flashloan", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [receiverAddress, assets, amounts, mods, onBehalfOf, params], __options);
	}

	/**
	* flashloanPremiumTotal
	*
	*/
	"flashloanPremiumTotal" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "flashloanGateway::flashloanPremiumTotal", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [], __options);
	}

	/**
	* controller
	*
	*/
	"controller" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "flashloanGateway::controller", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [], __options);
	}

}