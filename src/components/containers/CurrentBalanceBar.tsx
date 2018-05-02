import { connect } from "react-redux";
import { IState } from "../../types";
import { utils } from "../../utilities/stateUtils";
import BalanceBar from "../BalanceBar";

interface IStateToProps {
    total: number
}

const mapStateToProps = (state: IState): IStateToProps => {
   return {
        total: utils.getTransByDate(state).reduce((total, transaction) => {
                if (transaction.isExpense) {
                    total = total + transaction.amount;
                } else {
                    total = total - transaction.amount;
                }
            return total;
        }, 0)
    }
};

const CurrentBalanceBar = connect(mapStateToProps)(BalanceBar);

export default CurrentBalanceBar;