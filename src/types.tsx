export enum ExpenseCategory {
    OFFICE = "OFFICE"
}

export enum ActionType {
    ADD_TRANSACTION = "ADD_TRANSACTION",
    EDIT_TRANSACTION = "EDIT_TRANSACTION",
    UPDATE_TRANSACTION = "UPDATE_TRANSACTION",
    UPDATE_CURRENT_BALANCE = "UPDATE_CURRENT_BALANCE"
}

export interface ITransAddUpd {
    type: ActionType.ADD_TRANSACTION | ActionType.UPDATE_TRANSACTION,
    transaction: ITransaction
}

export interface ITransEditDel {
    type: ActionType.EDIT_TRANSACTION,
    transactionID: TTransactionID
}

export interface IUpdateCurrentBal {
    type: ActionType.UPDATE_CURRENT_BALANCE,
    date: TDate,
    amount: number
}

export type TAction = ITransAddUpd | ITransEditDel | IUpdateCurrentBal;
export type TTransactionID = number;
export type TOrderID = number;
export type TDate = string;

export interface ITransaction {
    id: TTransactionID,
    date: TDate,
    order: number,
    name: string,
    amount: number,
    category: ExpenseCategory,
    isExpense: boolean
}

export interface ITransactionList  {
    transactions: ITransaction[]
}

export interface ITransactionsByID{
    [key: number]: ITransaction
}

export interface ITransactionsByDate {
    [key: string]: TTransactionID[]
}

export interface IBalance {
    prevBalance: number,
    transactionAmount: number,
    currentBalance: number,
    finalBalance: number
}

export interface IBalanceByDate {
    [key: string]: IBalance
}

export interface IRootState {
    currentDate: TDate,
    nextTransID: TTransactionID,
    nextOrderID: TOrderID,
    transactions: {
        byID: ITransactionsByID
        byDate: ITransactionsByDate
    },
    editTransID: TTransactionID,
    balance: IBalanceByDate
}