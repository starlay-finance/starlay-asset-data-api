/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IDiaAggregatorInterface extends ethers.utils.Interface {
  functions: {
    "getValue(string)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getValue", values: [string]): string;

  decodeFunctionResult(functionFragment: "getValue", data: BytesLike): Result;

  events: {};
}

export class IDiaAggregator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IDiaAggregatorInterface;

  functions: {
    getValue(
      key: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "getValue(string)"(
      key: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;
  };

  getValue(
    key: string,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  "getValue(string)"(
    key: string,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  callStatic: {
    getValue(
      key: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "getValue(string)"(
      key: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;
  };

  filters: {};

  estimateGas: {
    getValue(key: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getValue(string)"(
      key: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getValue(
      key: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getValue(string)"(
      key: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}