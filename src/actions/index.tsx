import { ActionType, IAddTransaction, ITransaction, IUpdateCurrentBal } from "../types";

const addTransaction = (transaction: ITransaction): IAddTransaction => ({
    type: ActionType.ADD_TRANSACTION,
    transaction
});

const updateCurrentBal = (amount: number, date: string): IUpdateCurrentBal => ({
    type: ActionType.UPDATE_CURRENT_BALANCE,    
    date,
    amount
});

export { addTransaction, updateCurrentBal };