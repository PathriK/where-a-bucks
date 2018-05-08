import { connect, Dispatch } from "react-redux";
import { updateCurrentBal } from "../../actions";
import { IRootState, IUpdateCurrentBal } from "../../types";
import BalanceBar from "../BalanceBar";

interface IStateToProps {
    currentBalance: number,
    diffAmount: number,
    total: number,
    date: string
}

const mapStateToProps = (state: IRootState): IStateToProps => {
    const balance = state.balance[state.currentDate];
    let total = 0;
    let currentBalance = 0;
    let prevBalance = 0;
    if (balance) {
        if (balance.transactionAmount) {
            total = balance.transactionAmount
        }
        if (balance.currentBalance){
            currentBalance = balance.currentBalance;
        }
        if (balance.prevBalance){
            prevBalance = balance.prevBalance;
        }
    }    
    const diffAmount = (prevBalance - currentBalance) - total;
   return { currentBalance, diffAmount, total, date: state.currentDate }
};

interface IDispatchToProps {
    onCurrentChange: (currentBalance: number, date: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch<IUpdateCurrentBal>): IDispatchToProps => ({
    onCurrentChange: (currentBalance: number, date: string) => dispatch(updateCurrentBal(currentBalance, date))
});

const CurrentBalanceBar = connect(mapStateToProps, mapDispatchToProps)(BalanceBar);

export default CurrentBalanceBar;