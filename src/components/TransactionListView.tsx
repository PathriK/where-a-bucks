import * as React from 'react';
import { ITransactionList, TTransactionID } from '../types';
import TransactionView from './TransactionView';

interface ITransactionListView extends ITransactionList{
    onEditTransClick: (id: TTransactionID) => void
}

const TransactionListView: React.SFC<ITransactionListView> = ({transactions, onEditTransClick}) => (
    <ul>
        {transactions.map(transaction => 
            <TransactionView key={transaction.id} {...transaction} onEditTransClick={onEditTransClick}  />
        )}
    </ul>
);

export default TransactionListView;