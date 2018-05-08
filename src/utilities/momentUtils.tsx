import * as moment from 'moment';
import { TDate, TTransactionID } from '../types';

const typeFormat = "DD_MM_YYYY";
const displayFormat = "ddd, MMM Do YYYY";
const transIDFormat = "YYYYMMDD";

const getDateString = (date: moment.Moment): TDate => {
    return date.format(typeFormat);
}

const getDispayStr = (date: TDate): string => {
    return moment(date, typeFormat).format(displayFormat);
}

const getTodayDtStr = (): TDate => {
    return getDateString(moment());
}

const generateTransID = (): TTransactionID => {
    let today:string = moment().format(transIDFormat);
    today = today + "1";
    return parseInt(today, 10);
}

export default {
    generateTransID,
    getDispayStr,
    getTodayDtStr,
};

