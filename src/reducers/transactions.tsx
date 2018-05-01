import { ExpenseCategory, ITransaction } from "../types";

const initialState: ITransaction[] = [
    {
        id: 132456,
        date: "01-05-2018",
        order: 1,
        name: "Testing",
        amount: 90.98,
        category: ExpenseCategory.OFFICE,
        isExpense: true
    }
]
export const transactions = (state: ITransaction[] = initialState, action: any) => {
    return state;
}