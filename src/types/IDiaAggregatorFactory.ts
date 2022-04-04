/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IDiaAggregator } from "./IDiaAggregator";

export class IDiaAggregatorFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDiaAggregator {
    return new Contract(address, _abi, signerOrProvider) as IDiaAggregator;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "key",
        type: "string",
      },
    ],
    name: "getValue",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
