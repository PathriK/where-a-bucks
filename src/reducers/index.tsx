import { combineReducers } from "redux";
import balance from "./balance";
import { currentDate } from "./currentDate";
import { transactions } from "./transactions";

export default combineReducers({
    balance,
    currentDate,
    transactions    
});