/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import { queryOkJSON, queryJSON, handleReturnType } from '@727-ventures/typechain-types';
import { txSignAndSend } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/flashloan_receiver';
import type * as ReturnTypes from '../types-returns/flashloan_receiver';
import type BN from 'bn.js';
//@ts-ignore
import {ReturnNumber} from '@727-ventures/typechain-types';
import {getTypeDescription} from './../shared/utils';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";
import DATA_TYPE_DESCRIPTIONS from '../data/flashloan_receiver.json';
import EVENT_DATA_TYPE_DESCRIPTIONS from '../event-data/flashloan_receiver.json';


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
	* setFailExecutionTransfer
	*
	* @param { boolean } fail,
	* @returns { void }
	*/
	"setFailExecutionTransfer" (
		fail: boolean,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "setFailExecutionTransfer", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, EVENT_DATA_TYPE_DESCRIPTIONS);
		}, [fail], __options);
	}

	/**
	* failExecutionTransfer
	*
	* @returns { Result<boolean, ReturnTypes.LangError> }
	*/
	"failExecutionTransfer" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<boolean, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "failExecutionTransfer", [], __options, (result) => { return handleReturnType(result, getTypeDescription(7, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* executeOperation
	*
	* @param { Array<ArgumentTypes.AccountId> } assets,
	* @param { Array<(string | number | BN)> } amounts,
	* @param { Array<(string | number | BN)> } premiums,
	* @param { ArgumentTypes.AccountId } initiator,
	* @param { Array<(number | string | BN)> } params,
	* @returns { Result<boolean, ReturnTypes.LangError> }
	*/
	"executeOperation" (
		assets: Array<ArgumentTypes.AccountId>,
		amounts: Array<(string | number | BN)>,
		premiums: Array<(string | number | BN)>,
		initiator: ArgumentTypes.AccountId,
		params: Array<(number | string | BN)>,
		__options: GasLimit,
	): Promise< QueryReturnType< Result<boolean, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "flashloanReceiver::executeOperation", [assets, amounts, premiums, initiator, params], __options, (result) => { return handleReturnType(result, getTypeDescription(7, DATA_TYPE_DESCRIPTIONS)); });
	}

}