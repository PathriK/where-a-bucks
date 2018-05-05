import * as moment from 'moment';
import { TDate } from '../types';

const typeFormat = "DD_MM_YYYY";
const displayFormat = "ddd, MMM Do YYYY"

const getDateString = (date: moment.Moment): TDate => {
    return date.format(typeFormat);
}

const getDispayStr = (date: TDate): string => {
    return moment(date, typeFormat).format(displayFormat);
}

const getTodayDtStr = (): TDate => {
    return getDateString(moment());
}

export default {
    getDispayStr,
    getTodayDtStr
};

