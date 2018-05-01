import * as React from 'react';
import { ITransaction } from "./../types";

const Transaction: React.SFC<ITransaction> = ({name, amount, category, isExpense}) => (
    <li>{name} | {amount} | {category} | {isExpense ? 'Expense' : 'Income' }</li>
);

export default Transaction;