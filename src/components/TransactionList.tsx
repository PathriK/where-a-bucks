import * as React from 'react';
import { ITransactionList } from '../types';
import Transaction from './Transaction';

const TransactionList: React.SFC<ITransactionList> = ({transactions}) => (
    <ul>
        {transactions.map(transaction => 
            <Transaction key={transaction.id} {...transaction} />
        )}
    </ul>
);

export default TransactionList;