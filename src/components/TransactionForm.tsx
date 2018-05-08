import * as React from 'react';
import { ExpenseCategory, ITransaction } from '../types';

interface ITransactionForm {
    transaction: ITransaction,
    isEditMode: boolean,
    onTransactionSubmit: (transaction: ITransaction) => void,
    onTransactionUpdate: (transaction: ITransaction) => void
}

const TransactionForm: React.ComponentClass<ITransactionForm> = class extends React.Component<ITransactionForm, ITransaction> {

    public static getDerivedStateFromProps(nextProps: ITransactionForm, prevState: ITransaction) {
        if (nextProps.transaction.id !== prevState.id) {
            return nextProps.transaction;
        }
        return null;
    }
        
    constructor(props: ITransactionForm) {
        super(props);
        this.state = props.transaction;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public render() {
        return this.form();
      }    

    private handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const target = event.target;
        const name = target.name;
        switch (name) {
            case "name":
                this.setState({name: target.value})
                break;

            case "amount":
                let amount = parseFloat(target.value);
                if (!isFinite(amount)){
                    amount = 0;
                }
                this.setState({amount});
                break;

            case "category":
                this.setState({category: ExpenseCategory[target.value]})
                break;

            case "isExpense":
                this.setState({isExpense: (target as EventTarget & HTMLInputElement).checked})
                break;
        }
      }    

      private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if(this.props.isEditMode) {
            this.props.onTransactionUpdate(this.state);
        } else {
            this.props.onTransactionSubmit(this.state);
        }
      }
      
      private form() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.name}
                    name="name" />
                </label>
                <label>
                    Amount:
                    <input
                    type="number"
                    step="0.01"
                    onChange={this.handleInputChange}
                    value={this.state.amount}
                    name="amount"/>
                </label>
                <label>
                    Category:
                    <select
                    onChange={this.handleInputChange}
                    value={this.state.category}
                    name="category">
                    {Object.keys(ExpenseCategory).map(key => (
                        <option key={key} value={key}>{ExpenseCategory[key]}</option>
                    ))}
                    </select>
                </label>
                <label>
                    Is an Expense?
                    <input
                    onChange={this.handleInputChange}
                    checked={this.state.isExpense}
                    type="checkbox"
                    name="isExpense" />
                </label>
                <input type="submit" value="Submit" />
            </form>        
        );                    
      }



}

export {ITransactionForm, TransactionForm};