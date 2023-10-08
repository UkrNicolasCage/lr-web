import * as Yup from 'yup';

import { REGEX, SCHEDULE_ERRORS } from '../constants';
import { dateSchema } from './date';

export const scheduleSchema = Yup.object({
	name: Yup.string()
    .min(3, SCHEDULE_ERRORS.MUST_BE_LONGER_THAN_3)
		.max(100, SCHEDULE_ERRORS.MUST_BE_LESS_THAN_100)
		.required(SCHEDULE_ERRORS.REQUIRED),

  startStationId: Yup.object().shape({
  value: Yup.string().required(),
  label: Yup.string().required()
}),
  endStationId: Yup.object().shape({
  value: Yup.string().required(),
  label: Yup.string().required()
}),
  dispatch: dateSchema,
  arrival: dateSchema,
}).required();
