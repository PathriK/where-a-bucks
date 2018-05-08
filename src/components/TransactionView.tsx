import * as React from 'react';
import { ITransaction, TTransactionID } from "./../types";

interface ITransactionView extends ITransaction {    
    onEditTransClick: (id: TTransactionID) => void
}

const TransactionView: React.SFC<ITransactionView> = ({id, name, amount, category, isExpense, onEditTransClick}) => {
    const onClick = () => (onEditTransClick(id));
    return (
        <li>
            {name} | {amount} | {category} | {isExpense ? 'Expense' : 'Income' }
            <button onClick={onClick}>Edit</button>
        </li>        
    );
}

export default TransactionView;