import type {ReturnNumber} from "@727-ventures/typechain-types";
import type * as ReturnTypes from '../types-returns/flashloan_gateway';

export interface FlashLoan {
	target: ReturnTypes.AccountId;
	initiator: ReturnTypes.AccountId;
	asset: ReturnTypes.AccountId;
	amount: ReturnNumber;
	premium: ReturnNumber;
}

