import * as Yup from 'yup';

import { REGEX } from '../constants/regex.const';
import { EMAIL_ERRORS, PASSWORD_ERRORS } from '../constants/errors-messages.const';

export const signUpSchema = Yup.object({
	email: Yup.string()
		.email(EMAIL_ERRORS.PATTERN)
		.max(100)
		.required(EMAIL_ERRORS.REQUIRED),

  password: Yup.string()
  .matches(
    REGEX.PASSWORD,
    PASSWORD_ERRORS.PATTERN,
  )
  .required(PASSWORD_ERRORS.REQUIRED),

  confirmPassword: Yup.string()
  .oneOf([Yup.ref('password'), null], PASSWORD_ERRORS.DONT_MATCH)
  .required(PASSWORD_ERRORS.REQUIRED_CONFIRM),
}).required();
