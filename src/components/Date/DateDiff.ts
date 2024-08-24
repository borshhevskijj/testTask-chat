import dayjs from 'dayjs';

type Timestamp = number;


/**
 * Преобразует UNIX timestamp в строку формата DD.MM.YYYY.
 * 
 * @param {number} timestamp1 - Временная метка в формате UNIX.
 * @param {number} timestamp2 - Временная метка в формате UNIX.
 * 
 * @returns -1 - При условии что timestamp1 или timestamp2 меньше 0.
 * @returns number -Разница в днях.
 */

export const getDifferenceInDays=( timestamp1: Timestamp,
    timestamp2: Timestamp) => {
        if ( timestamp1 < 0 || timestamp2 < 0) {
            return -1
        }
        const date1 = dayjs.unix(timestamp1);
        const date2 = dayjs.unix(timestamp2);
        
        
        return date1.diff(date2, 'day');
}