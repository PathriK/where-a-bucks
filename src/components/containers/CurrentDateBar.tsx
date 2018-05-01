import { connect } from "react-redux";
import { IState } from "../../types";
import DateBar from "../DateBar";

interface IStateToProps {
    date: string
}

const mapStateToProps = (state: IState): IStateToProps => ({
    date: state.currentDate
});

const currentDateBar = connect(mapStateToProps)(DateBar);

export default currentDateBar;