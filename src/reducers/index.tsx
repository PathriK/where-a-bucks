import { combineReducers } from "redux";
import { currentDate } from "./currentDate";
import { transactions } from "./transactions";

export default combineReducers({
    currentDate,
    transactions
});