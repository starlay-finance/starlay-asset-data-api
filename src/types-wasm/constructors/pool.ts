import {CodePromise} from "@polkadot/api-contract";
import type {KeyringPair} from "@polkadot/keyring/types";
import type {ApiPromise} from "@polkadot/api";
import {_genValidGasLimitAndValue, _signAndSend, SignAndSendSuccessResponse} from "@727-ventures/typechain-types";
import type {ConstructorOptions} from "@727-ventures/typechain-types";
import type {WeightV2} from "@polkadot/types/interfaces";
import type * as ArgumentTypes from '../types-arguments/pool';
import { ContractFile } from '../contract-info/pool';
import type BN from 'bn.js';

export default class Constructors {
	readonly nativeAPI: ApiPromise;
	readonly signer: KeyringPair;

	constructor(
		nativeAPI: ApiPromise,
		signer: KeyringPair,
	) {
		this.nativeAPI = nativeAPI;
		this.signer = signer;
	}

	/**
	* new
	*
	* @param { ArgumentTypes.AccountId | null } incentivesController,
	* @param { ArgumentTypes.AccountId } underlying,
	* @param { ArgumentTypes.AccountId } controller,
	* @param { ArgumentTypes.AccountId } rateModel,
	* @param { ArgumentTypes.WrappedU256 } initialExchangeRateMantissa,
	* @param { (string | number | BN) } liquidationThreshold,
	* @param { string } name,
	* @param { string } symbol,
	* @param { (number | string | BN) } decimals,
	*/
   	async "new" (
		incentivesController: ArgumentTypes.AccountId | null,
		underlying: ArgumentTypes.AccountId,
		controller: ArgumentTypes.AccountId,
		rateModel: ArgumentTypes.AccountId,
		initialExchangeRateMantissa: ArgumentTypes.WrappedU256,
		liquidationThreshold: (string | number | BN),
		name: string,
		symbol: string,
		decimals: (number | string | BN),
		__options ? : ConstructorOptions,
   	) {
   		const __contract = JSON.parse(ContractFile);
		const code = new CodePromise(this.nativeAPI, __contract, __contract.source.wasm);
		const gasLimit = (await _genValidGasLimitAndValue(this.nativeAPI, __options)).gasLimit as WeightV2;

		const storageDepositLimit = __options?.storageDepositLimit;
			const tx = code.tx["new"]!({ gasLimit, storageDepositLimit, value: __options?.value }, incentivesController, underlying, controller, rateModel, initialExchangeRateMantissa, liquidationThreshold, name, symbol, decimals);
			let response;

			try {
				response = await _signAndSend(this.nativeAPI.registry, tx, this.signer, (event: any) => event);
			}
			catch (error) {
				console.log(error);
			}

		return {
			result: response as SignAndSendSuccessResponse,
			// @ts-ignore
			address: (response as SignAndSendSuccessResponse)!.result!.contract.address.toString(),
		};
	}
	/**
	* newFromAsset
	*
	* @param { ArgumentTypes.AccountId | null } incentivesController,
	* @param { ArgumentTypes.AccountId } underlying,
	* @param { ArgumentTypes.AccountId } controller,
	* @param { ArgumentTypes.AccountId } rateModel,
	* @param { ArgumentTypes.WrappedU256 } initialExchangeRateMantissa,
	* @param { (string | number | BN) } liquidationThreshold,
	*/
   	async "newFromAsset" (
		incentivesController: ArgumentTypes.AccountId | null,
		underlying: ArgumentTypes.AccountId,
		controller: ArgumentTypes.AccountId,
		rateModel: ArgumentTypes.AccountId,
		initialExchangeRateMantissa: ArgumentTypes.WrappedU256,
		liquidationThreshold: (string | number | BN),
		__options ? : ConstructorOptions,
   	) {
   		const __contract = JSON.parse(ContractFile);
		const code = new CodePromise(this.nativeAPI, __contract, __contract.source.wasm);
		const gasLimit = (await _genValidGasLimitAndValue(this.nativeAPI, __options)).gasLimit as WeightV2;

		const storageDepositLimit = __options?.storageDepositLimit;
			const tx = code.tx["newFromAsset"]!({ gasLimit, storageDepositLimit, value: __options?.value }, incentivesController, underlying, controller, rateModel, initialExchangeRateMantissa, liquidationThreshold);
			let response;

			try {
				response = await _signAndSend(this.nativeAPI.registry, tx, this.signer, (event: any) => event);
			}
			catch (error) {
				console.log(error);
			}

		return {
			result: response as SignAndSendSuccessResponse,
			// @ts-ignore
			address: (response as SignAndSendSuccessResponse)!.result!.contract.address.toString(),
		};
	}
}