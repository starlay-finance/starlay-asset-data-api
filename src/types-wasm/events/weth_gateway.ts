import type * as EventTypes from '../event-types/weth_gateway';
import type {ContractPromise} from "@polkadot/api-contract";
import type {ApiPromise} from "@polkadot/api";
import EVENT_DATA_TYPE_DESCRIPTIONS from '../event-data/weth_gateway.json';
import {getEventTypeDescription} from "../shared/utils";
import {handleEventReturn} from "@727-ventures/typechain-types";

export default class EventsClass {
	readonly __nativeContract : ContractPromise;
	readonly __api : ApiPromise;

	constructor(
		nativeContract : ContractPromise,
		api : ApiPromise,
	) {
		this.__nativeContract = nativeContract;
		this.__api = api;
	}

	public subscribeOnDepositEthEvent(callback : (event : EventTypes.DepositEth) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('DepositEth', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.DepositEth);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'DepositEth');
	}

	public subscribeOnWithdrawEthEvent(callback : (event : EventTypes.WithdrawEth) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('WithdrawEth', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.WithdrawEth);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'WithdrawEth');
	}

	public subscribeOnBorrowEthEvent(callback : (event : EventTypes.BorrowEth) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('BorrowEth', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.BorrowEth);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'BorrowEth');
	}

	public subscribeOnRepayEthEvent(callback : (event : EventTypes.RepayEth) => void) {
		const callbackWrapper = (args: any[], event: any) => {
			const _event: Record < string, any > = {};

			for (let i = 0; i < args.length; i++) {
				_event[event.args[i]!.name] = args[i]!.toJSON();
			}

			callback(handleEventReturn(_event, getEventTypeDescription('RepayEth', EVENT_DATA_TYPE_DESCRIPTIONS)) as EventTypes.RepayEth);
		};

		return this.__subscribeOnEvent(callbackWrapper, (eventName : string) => eventName == 'RepayEth');
	}


	private __subscribeOnEvent(
		callback : (args: any[], event: any) => void,
		filter : (eventName: string) => boolean = () => true
	) {
		// @ts-ignore
		return this.__api.query.system.events((events) => {
			events.forEach((record: any) => {
				const { event } = record;

				if (event.method == 'ContractEmitted') {
					const [address, data] = record.event.data;

					if (address.toString() === this.__nativeContract.address.toString()) {
						const {args, event} = this.__nativeContract.abi.decodeEvent(data);

						if (filter(event.identifier.toString()))
							callback(args, event);
					}
				}
			});
		});
	}

}