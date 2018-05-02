export enum ExpenseCategory {
    OFFICE = "OFFICE"
}

export enum ActionType {
    ADD_TRANSACTION = "ADD_TRANSACTION",
    UPDATE_CURRENT_BALANCE = "UPDATE_CURRENT_BALANCE"
}

export interface IAddTransaction {
    type: ActionType.ADD_TRANSACTION,
    transaction: ITransaction
}

export interface IUpdateCurrentBal {
    type: ActionType.UPDATE_CURRENT_BALANCE,
    date: TDate,
    amount: number
}

export type TAction = IAddTransaction | IUpdateCurrentBal;
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

export interface IBalance {
    prevBalance: number,
    transactionAmount: number,
    currentBalance: number,
    finalBalance: number
}

export interface IBalanceByDate {
    [key: string]: IBalance
}

export interface IState {
    currentDate: string,
    transactions: {
        byID: ITransactionsByID
        byDate: ITransactionsByDate
    },
    balance: IBalanceByDate
}