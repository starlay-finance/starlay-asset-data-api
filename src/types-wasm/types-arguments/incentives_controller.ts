import type BN from 'bn.js';

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export enum Error {
	callerIsNotConfiguredAsset = 'CallerIsNotConfiguredAsset'
}

export type AccountId = string | number[]

