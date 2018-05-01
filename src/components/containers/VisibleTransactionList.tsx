import { connect } from "react-redux";
import { IState, ITransactionList } from "../../types";
import TransactionList from "../TransactionList";

const mapStateToProps = (state: IState): ITransactionList => ({
    transactions: state.transactions.filter(transaction => transaction.date === state.currentDate)
})

const VisibleTransactionList = connect(
    mapStateToProps
)(TransactionList);

export default VisibleTransactionList;