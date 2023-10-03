/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import { queryOkJSON, queryJSON, handleReturnType } from '@727-ventures/typechain-types';
import { txSignAndSend } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/incentives_controller';
import type * as ReturnTypes from '../types-returns/incentives_controller';
import type BN from 'bn.js';
//@ts-ignore
import {ReturnNumber} from '@727-ventures/typechain-types';
import {getTypeDescription} from './../shared/utils';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";
import DATA_TYPE_DESCRIPTIONS from '../data/incentives_controller.json';
import EVENT_DATA_TYPE_DESCRIPTIONS from '../event-data/incentives_controller.json';


export default class Methods {
	readonly __nativeContract : ContractPromise;
	readonly __keyringPair : KeyringPair;
	readonly __callerAddress : string;
	readonly __apiPromise: ApiPromise;

	constructor(
		apiPromise : ApiPromise,
		nativeContract : ContractPromise,
		keyringPair : KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
		this.__callerAddress = keyringPair.address;
	}

	/**
	* setOk
	*
	* @param { boolean } isOk,
	* @returns { void }
	*/
	"setOk" (
		isOk: boolean,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "setOk", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [isOk], __options);
	}

	/**
	* handleAction
	*
	* @param { ArgumentTypes.AccountId } user,
	* @param { (string | number | BN) } totalDeposit,
	* @param { (string | number | BN) } totalBorrow,
	* @param { (string | number | BN) } userDeposit,
	* @param { (string | number | BN) } userBorrow,
	* @returns { void }
	*/
	"handleAction" (
		user: ArgumentTypes.AccountId,
		totalDeposit: (string | number | BN),
		totalBorrow: (string | number | BN),
		userDeposit: (string | number | BN),
		userBorrow: (string | number | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "incentivesController::handleAction", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [user, totalDeposit, totalBorrow, userDeposit, userBorrow], __options);
	}

}