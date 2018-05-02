export enum ExpenseCategory {
    OFFICE = "OFFICE"
}

export enum ActionType {
    ADD_TRANSACTION = "ADD_EXPENSE"
}

export interface IAddTransaction {
    type: ActionType.ADD_TRANSACTION,
    transaction: ITransaction
}

export type TAction = IAddTransaction;
export type TTransactionID = number;
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

export interface IState {
    currentDate: string,
    transactions: {
        byID: ITransactionsByID
        byDate: ITransactionsByDate
    }
}