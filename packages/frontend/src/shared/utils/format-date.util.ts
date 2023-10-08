import { MONTH } from '../constants/general.const';

export const formatDate = (inputDate: string | Date): string => {
    const date = new Date(inputDate);

    const month = MONTH[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${month} ${day}, ${year} ${hours}:${minutes}`;
}
