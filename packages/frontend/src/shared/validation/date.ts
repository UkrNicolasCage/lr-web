import * as yup from 'yup';
import { DATE_ERRORS, REGEX } from '../constants';

export const dateSchema = yup.string().test('is-date', DATE_ERRORS.MUST_BE_DATE, (value) => {
  if (!value) {
return false;
}

  if (!REGEX.DATE.test(value)) {
return false;
}

  const [datePart, timePart] = value.split(' ');
  const [year, month, day] = datePart!.split('-').map(Number);
  const [hour, minute] = timePart!.split(':').map(Number);

  if (year! < 0 || year! > 9999) {
return false;
}
  if (month! < 1 || month! > 12) {
return false;
}
  if (day! < 1 || day! > 31) {
return false;
}
  if (hour! < 0 || hour! > 23) {
return false;
}
  if (minute! < 0 || minute! > 59) {
return false;
}

  const daysInMonth = new Date(year!, month!, 0).getDate();
  if (day! > daysInMonth) {
return false;
}

  const now = new Date();
  const inputDate = new Date(year!, month! - 1, day, hour, minute);
  if (inputDate < now) {
return false;
}

  return true;
});