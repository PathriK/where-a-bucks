import { connect } from "react-redux";
import { IState } from "../../types";
import BalanceBar from "../BalanceBar";

interface IStateToProps {
    total: number
}

const mapStateToProps = (state: IState): IStateToProps => ({
    total: state.transactions.reduce((total, transaction) => {
        if (transaction.date === state.currentDate){
            if (transaction.isExpense) {
                total = total + transaction.amount;
            } else {
                total = total - transaction.amount;
            }
        }
        return total;
    }, 0)
});

const CurrentBalanceBar = connect(mapStateToProps)(BalanceBar);

export default CurrentBalanceBar;