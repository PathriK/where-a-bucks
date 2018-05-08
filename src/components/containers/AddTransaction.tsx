import { connect, Dispatch } from "react-redux";
import { addTransaction, updateTransaction } from "../../actions";
import { ExpenseCategory, IRootState, ITransaction, ITransAddUpd } from "../../types";
import { utils } from "../../utilities/stateUtils";
import { TransactionForm } from "../TransactionForm";

interface ImapStateToProps {
    transaction: ITransaction,
    isEditMode: boolean
}

const mapStateToProps = (state: IRootState): ImapStateToProps => {
    if(state.editTransID !== 0){
        return {
            transaction: utils.getTransByID(state, state.editTransID),
            isEditMode: true
        }        
    } else {
        return {
            transaction: {
                id: state.nextTransID,
                date: state.currentDate,        
                order: state.nextOrderID,
                name: "",
                amount: 0,
                category: ExpenseCategory.OFFICE,
                isExpense: true        
            },
            isEditMode: false
        }  
    }
}

interface IDispatchToProps {
    onTransactionSubmit: (transaction: ITransaction) => void,
    onTransactionUpdate: (transaction: ITransaction) => void
}

// interface IOwnProps {
//     isEditMode: boolean
// }

const mapDispatchToProps = (dispatch: Dispatch<ITransAddUpd>, ownProps: any): IDispatchToProps => ({
    onTransactionSubmit: (transaction: ITransaction) => dispatch(addTransaction(transaction)),
    onTransactionUpdate: (transaction: ITransaction) => dispatch(updateTransaction(transaction))
});

export default connect<ImapStateToProps, IDispatchToProps>(mapStateToProps, mapDispatchToProps)(TransactionForm);