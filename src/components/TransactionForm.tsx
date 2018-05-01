import * as React from 'react';
import { ExpenseCategory, ITransaction } from '../types';

interface ITransactionForm {
    date: string,
    onTransactionSubmit(transaction: ITransaction): void
}

const TransactionForm: React.SFC<ITransactionForm> = ({date, onTransactionSubmit}) => {    
    const formID = (): number => {
        return Date.now();
    }
    const getOrder = (): number => {
        return 1;
    }
    let name: HTMLInputElement;
    let amount: HTMLInputElement;
    let category: HTMLSelectElement;
    let isExpense: HTMLInputElement;
    const formAddData = (): ITransaction => ({
        id: formID(),
        date,
        order: getOrder(),
        name: name.value,
        amount: parseFloat(amount.value),
        category: ExpenseCategory[category.value],
        isExpense: isExpense.checked
    });
    const clearFields = () => {
        name.value = '';
        amount.value = '';
        category.value = '';
        name.checked = false;
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        onTransactionSubmit(formAddData());
        clearFields();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                type="text"
                ref={(node: HTMLInputElement) => name = node} />
            </label>
            <label>
                Amount:
                <input
                type="number"
                step="0.01"
                ref={(node: HTMLInputElement) => amount = node} />
            </label>
            <label>
                Category:
                <select
                ref={(node: HTMLSelectElement) => category = node}>
                {Object.keys(ExpenseCategory).map(key => (
                    <option key={key} value={key}>{ExpenseCategory[key]}</option>
                ))}
                </select>
            </label>
            <label>
                Is an Expense?
                <input
                type="checkbox"
                ref={(node: HTMLInputElement) => isExpense = node} />
            </label>
            <input type="submit" value="Submit" />
        </form>        
    );
}

export default TransactionForm;