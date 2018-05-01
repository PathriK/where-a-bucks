import { connect, Dispatch } from "react-redux";
import { addTransaction } from "../../actions";
import { IAddTransaction, IState, ITransaction } from "../../types";
import TransactionForm from "../TransactionForm";

interface ImapStateToProps {
    date: string
}

const mapStateToProps = (state: IState): ImapStateToProps => ({
    date: state.currentDate
});

interface IDispatchToProps {
    onTransactionSubmit: (transaction: ITransaction) => void
}

const mapDispatchToProps = (dispatch: Dispatch<IAddTransaction>): IDispatchToProps => ({
    onTransactionSubmit: (transaction: ITransaction) => dispatch(addTransaction(transaction))
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);