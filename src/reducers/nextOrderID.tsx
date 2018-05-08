import { ActionType, TAction, TOrderID } from "../types";

export const nextOrderID = (state: TOrderID = 1, action: TAction) => {
    switch (action.type) {
        case ActionType.ADD_TRANSACTION:
            return state + 1;
    
        default:
            return state;
    }
}