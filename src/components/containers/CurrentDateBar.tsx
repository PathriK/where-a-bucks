import { connect } from "react-redux";
import { IState } from "../../types";
import momentUtils from "../../utilities/momentUtils";
import DateBar from "../DateBar";

interface IStateToProps {
    date: string
}

const mapStateToProps = (state: IState): IStateToProps => ({
    date: momentUtils.getDispayStr(state.currentDate)
});

const CurrentDateBar = connect(mapStateToProps)(DateBar);

export default CurrentDateBar;