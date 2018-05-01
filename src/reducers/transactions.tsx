import { ActionType, IAddTransaction, ITransaction, TAction } from "../types";

export const transactions = (state: ITransaction[] = [], action: TAction) => {
    switch (action.type) {
        case ActionType.ADD_TRANSACTION:
            return [
                ...state,
                (action as IAddTransaction).transaction
            ];
        
        default:
            return state;
    }    
}