/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/flashloan_receiver';
import type * as ReturnTypes from '../types-returns/flashloan_receiver';
import type BN from 'bn.js';
//@ts-ignore
import {ReturnNumber} from '@727-ventures/typechain-types';
import {getTypeDescription} from './../shared/utils';
import DATA_TYPE_DESCRIPTIONS from '../data/flashloan_receiver.json';


export default class Methods {
	readonly __nativeContract : ContractPromise;
	readonly __apiPromise: ApiPromise;
	readonly __callerAddress : string;

	constructor(
		nativeContract : ContractPromise,
		nativeApi : ApiPromise,
		callerAddress : string,
	) {
		this.__nativeContract = nativeContract;
		this.__callerAddress = callerAddress;
		this.__apiPromise = nativeApi;
	}

	/**
	* setFailExecutionTransfer
	*
	* @param { boolean } fail,
	* @returns { Result<null, ReturnTypes.LangError> }
	*/
	"setFailExecutionTransfer" (
		fail: boolean,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "setFailExecutionTransfer", [fail], __options , (result) => { return handleReturnType(result, getTypeDescription(4, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* failExecutionTransfer
	*
	* @returns { Result<boolean, ReturnTypes.LangError> }
	*/
	"failExecutionTransfer" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<boolean, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "failExecutionTransfer", [], __options , (result) => { return handleReturnType(result, getTypeDescription(7, DATA_TYPE_DESCRIPTIONS)); });
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
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<boolean, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "flashloanReceiver::executeOperation", [assets, amounts, premiums, initiator, params], __options , (result) => { return handleReturnType(result, getTypeDescription(7, DATA_TYPE_DESCRIPTIONS)); });
	}

}