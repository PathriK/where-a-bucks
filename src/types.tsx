export enum ExpenseCategory {
    OFFICE = "OFFICE"
}

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