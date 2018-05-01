import { ActionType, IAddTransaction, ITransaction } from "../types";

const addTransaction = (transaction: ITransaction): IAddTransaction => ({
    type: ActionType.ADD_TRANSACTION,
    transaction
});

export { addTransaction };