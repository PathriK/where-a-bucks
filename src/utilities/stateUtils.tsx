import { IState, TDate } from "../types";

const getTransByDate = (state: IState, date: TDate = state.currentDate) => {
    const transactionIDs = state.transactions.byDate[state.currentDate];
    if (transactionIDs) {
        return transactionIDs.map(transactionID => state.transactions.byID[transactionID]);
    } else {
        return [];
    }
};

export const utils = {
    getTransByDate
};