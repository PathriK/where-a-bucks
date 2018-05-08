import { IRootState, ITransaction, TDate, TTransactionID } from "../types";

const getTransByDate = (state: IRootState, date: TDate = state.currentDate) => {
    const transactionIDs = state.transactions.byDate[state.currentDate];
    if (transactionIDs) {
        return transactionIDs.map(transactionID => state.transactions.byID[transactionID]);
    } else {
        return [];
    }
};

const getTransByID = (state: IRootState, id: TTransactionID): ITransaction => ( state.transactions.byID[id]);

export const utils = {
    getTransByDate,
    getTransByID    
};