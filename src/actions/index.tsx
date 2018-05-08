import { ActionType, ITransaction, ITransAddUpd, ITransEditDel, IUpdateCurrentBal, TTransactionID } from "../types";

const addTransaction = (transaction: ITransaction): ITransAddUpd => ({
    type: ActionType.ADD_TRANSACTION,
    transaction
});

const editTransaction = (transactionID: TTransactionID): ITransEditDel => ({
    type: ActionType.EDIT_TRANSACTION,
    transactionID
});

const updateTransaction = (transaction: ITransaction): ITransAddUpd => ({
    type: ActionType.UPDATE_TRANSACTION,
    transaction
});

const updateCurrentBal = (amount: number, date: string): IUpdateCurrentBal => ({
    type: ActionType.UPDATE_CURRENT_BALANCE,    
    date,
    amount
});

export { addTransaction, editTransaction, updateTransaction, updateCurrentBal };