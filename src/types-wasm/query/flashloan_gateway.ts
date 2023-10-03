/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/flashloan_gateway';
import type * as ReturnTypes from '../types-returns/flashloan_gateway';
import type BN from 'bn.js';
//@ts-ignore
import {ReturnNumber} from '@727-ventures/typechain-types';
import {getTypeDescription} from './../shared/utils';
import DATA_TYPE_DESCRIPTIONS from '../data/flashloan_gateway.json';


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
	* flashloan
	*
	* @param { ArgumentTypes.AccountId } receiverAddress,
	* @param { Array<ArgumentTypes.AccountId> } assets,
	* @param { Array<(string | number | BN)> } amounts,
	* @param { Array<(number | string | BN)> } mods,
	* @param { ArgumentTypes.AccountId } onBehalfOf,
	* @param { Array<(number | string | BN)> } params,
	* @returns { Result<Result<null, ReturnTypes.flashloan_gateway_Error>, ReturnTypes.LangError> }
	*/
	"flashloan" (
		receiverAddress: ArgumentTypes.AccountId,
		assets: Array<ArgumentTypes.AccountId>,
		amounts: Array<(string | number | BN)>,
		mods: Array<(number | string | BN)>,
		onBehalfOf: ArgumentTypes.AccountId,
		params: Array<(number | string | BN)>,
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<Result<null, ReturnTypes.flashloan_gateway_Error>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "flashloanGateway::flashloan", [receiverAddress, assets, amounts, mods, onBehalfOf, params], __options , (result) => { return handleReturnType(result, getTypeDescription(10, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* flashloanPremiumTotal
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"flashloanPremiumTotal" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "flashloanGateway::flashloanPremiumTotal", [], __options , (result) => { return handleReturnType(result, getTypeDescription(17, DATA_TYPE_DESCRIPTIONS)); });
	}

	/**
	* controller
	*
	* @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
	*/
	"controller" (
		__options ? : GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "flashloanGateway::controller", [], __options , (result) => { return handleReturnType(result, getTypeDescription(18, DATA_TYPE_DESCRIPTIONS)); });
	}

}