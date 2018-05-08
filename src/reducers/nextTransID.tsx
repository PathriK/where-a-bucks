import { ActionType, TAction, TTransactionID } from "../types";
import momentUtils from "../utilities/momentUtils";

export const nextTransID = (state: TTransactionID = momentUtils.generateTransID(), action: TAction) => {
    switch (action.type) {
        case ActionType.ADD_TRANSACTION:
            return state + 1;
    
        default:
            return state;
    }
}