import { combineReducers } from "redux";
import { Reducer } from "redux";
import { IRootState } from "../types";
import balance from "./balance";
import { currentDate } from "./currentDate";
import { editTransID } from "./editTransID";
import { nextOrderID } from "./nextOrderID";
import { nextTransID } from "./nextTransID";
import { transactions } from "./transactions";

const rootReducer: Reducer<IRootState> =  combineReducers({
    balance,
    currentDate,
    editTransID,
    nextOrderID,
    nextTransID,
    transactions    
});

export default rootReducer;