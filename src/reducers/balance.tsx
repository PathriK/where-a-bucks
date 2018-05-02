import { ActionType, IAddTransaction, IBalance, IBalanceByDate, IUpdateCurrentBal, TAction } from "../types";

const getPrevBalance = (state: IBalanceByDate) => {
    return 80;
}

const balance = (state: IBalanceByDate = {}, action: TAction) => {
    const newBalance: IBalance = {
        prevBalance: 0,
        transactionAmount: 0,
        currentBalance: 0,  
        finalBalance: 0
    }        
    switch (action.type) {
        case ActionType.ADD_TRANSACTION: {
            const transaction = (action as IAddTransaction).transaction;
            const bal = state[transaction.date];
            if(bal && typeof bal.prevBalance !== 'undefined') {
                newBalance.prevBalance = bal.prevBalance;
                newBalance.currentBalance = bal.currentBalance;
                if (transaction.isExpense){
                    newBalance.transactionAmount = bal.transactionAmount + transaction.amount;
                } else {
                    newBalance.transactionAmount = bal.transactionAmount - transaction.amount;
                }
                newBalance.finalBalance = newBalance.prevBalance - newBalance.transactionAmount;
                
            } else {
                newBalance.prevBalance = getPrevBalance(state);
                if (transaction.isExpense){
                    newBalance.transactionAmount = transaction.amount;
                } else {
                    newBalance.transactionAmount = -transaction.amount;
                }
                newBalance.finalBalance = newBalance.prevBalance - newBalance.transactionAmount;
            }
            return {
                ...state,
                [transaction.date]: newBalance
            }
        }

        case ActionType.UPDATE_CURRENT_BALANCE: {
        const {date, amount} = (action as IUpdateCurrentBal);
        const bal = state[date];
        if (bal && typeof bal.currentBalance !== 'undefined'){
            Object.assign(newBalance, bal, {
                currentBalance: amount
            });
        } else {
            Object.assign(newBalance, {
                currentBalance: amount,
                prevBalance: getPrevBalance(state)
            });
        }
        return {
            ...state,
            [date]: newBalance
        }
    }
        default:
            return state;
    }
}

export default balance;