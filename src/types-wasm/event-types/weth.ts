import type {ReturnNumber} from "@727-ventures/typechain-types";
import type * as ReturnTypes from '../types-returns/weth';

export interface Deposit {
	dst: ReturnTypes.AccountId;
	wad: ReturnNumber;
}

export interface Withdraw {
	src: ReturnTypes.AccountId;
	wad: ReturnNumber;
}

