import { combineReducers } from "redux";
import { ActionType, ITransactionsByDate, ITransactionsByID, ITransAddUpd, TAction, TTransactionID } from "../types";

const byID = (state: ITransactionsByID = {}, action: TAction) => {
    switch (action.type) {
        case ActionType.ADD_TRANSACTION:
        case ActionType.UPDATE_TRANSACTION:
            const transaction = (action as ITransAddUpd).transaction;
            return {
                ...state,
                [transaction.id]: transaction
            };
        
        default:
            return state;
    }    
}

const addTransactionByDate = (state: ITransactionsByDate, action: ITransAddUpd): ITransactionsByDate => {
    const {id, date} = action.transaction;
    const transactionIDs:TTransactionID[] = state[date] ? state[date] : [];
    return {
        ...state,
        [date]: transactionIDs.concat(id)
    };
}

const byDate = (state: ITransactionsByDate = {}, action: TAction) => {
    switch (action.type) {
        case ActionType.ADD_TRANSACTION:
            return addTransactionByDate(state, action);
    
        default:
            return state;
    }
}

export const transactions = combineReducers({
    byDate,
    byID
});