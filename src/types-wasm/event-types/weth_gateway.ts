import type {ReturnNumber} from "@727-ventures/typechain-types";
import type * as ReturnTypes from '../types-returns/weth_gateway';

export interface DepositEth {
	pool: ReturnTypes.AccountId;
	from: ReturnTypes.AccountId;
	value: ReturnNumber;
}

export interface WithdrawEth {
	pool: ReturnTypes.AccountId;
	to: ReturnTypes.AccountId;
	value: ReturnNumber;
}

export interface BorrowEth {
	pool: ReturnTypes.AccountId;
	to: ReturnTypes.AccountId;
	value: ReturnNumber;
}

export interface RepayEth {
	pool: ReturnTypes.AccountId;
	from: ReturnTypes.AccountId;
	value: ReturnNumber;
}

