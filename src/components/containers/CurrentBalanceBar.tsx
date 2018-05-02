import { connect } from "react-redux";
import { IState } from "../../types";
import BalanceBar from "../BalanceBar";

interface IStateToProps {
    total: number
}

const mapStateToProps = (state: IState): IStateToProps => {
    const balance = state.balance[state.currentDate];
    let total = 0;
    if (balance && balance.transactionAmount){
        total = balance.transactionAmount;
    }
   return { total }
};

const CurrentBalanceBar = connect(mapStateToProps)(BalanceBar);

export default CurrentBalanceBar;