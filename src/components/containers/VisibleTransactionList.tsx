import { connect } from "react-redux";
import { IState, ITransactionList } from "../../types";
import { utils } from "../../utilities/stateUtils";
import TransactionList from "../TransactionList";

const mapStateToProps = (state: IState): ITransactionList => ({
    transactions: utils.getTransByDate(state)
});

const VisibleTransactionList = connect(
    mapStateToProps
)(TransactionList);

export default VisibleTransactionList;