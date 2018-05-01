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

export interface ITransaction {
    id: number,
    date: string,
    order: number,
    name: string,
    amount: number,
    category: ExpenseCategory,
    isExpense: boolean
}

export interface ITransactionList  {
    transactions: ITransaction[]
}

export interface IState {
    currentDate: string,
    transactions: ITransaction[]
}