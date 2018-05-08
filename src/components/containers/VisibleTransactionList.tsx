import { connect, Dispatch } from "react-redux";
import { editTransaction } from "../../actions";
import { IRootState, ITransactionList, ITransEditDel, TTransactionID } from "../../types";
import { utils } from "../../utilities/stateUtils";
import TransactionListView from "../TransactionListView";

const mapStateToProps = (state: IRootState): ITransactionList => ({
    transactions: utils.getTransByDate(state)
});

interface IDispatchToProps {
    onEditTransClick: (id: TTransactionID) => void
}

const mapDispathToProps = (dispatch: Dispatch<ITransEditDel>): IDispatchToProps => ({
    onEditTransClick: (id: TTransactionID) => dispatch(editTransaction(id))
})

const VisibleTransactionList = connect(
    mapStateToProps, mapDispathToProps
)(TransactionListView);

export default VisibleTransactionList;