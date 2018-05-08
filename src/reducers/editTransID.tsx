import { ActionType, TAction, TTransactionID } from "../types";

export const editTransID = (state: TTransactionID = 0, action: TAction) => {
    switch (action.type) {
        case ActionType.EDIT_TRANSACTION:
            return action.transactionID;
        case ActionType.UPDATE_TRANSACTION:
            return 0;
        default:
            return state;
    }
}