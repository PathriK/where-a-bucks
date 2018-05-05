import { TAction, TDate } from "../types";
import momentUtils from '../utilities/momentUtils';

export const currentDate = (state: TDate = momentUtils.getTodayDtStr(), action: TAction) => {
    return state;
}