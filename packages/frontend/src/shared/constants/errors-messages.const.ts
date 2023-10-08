/* eslint-disable max-len */
export const PASSWORD_ERRORS = Object.freeze({
  PATTERN: 'The password must be between 8 and 20 characters and contain only Latin letters, at least one uppercase letter, one lowercase letter, and one number',
  DONT_MATCH: 'Passwords don’t match',
  REQUIRED: 'Password is required',
  CANT_BE_SAME: 'New password cannot be the same as the current password',
  CURRENT_REQUIRED: 'Current password is required',
  NEW_REQUIRED: 'New password is required',
  REQUIRED_CONFIRM: 'Please confirm your password'
});

export const EMAIL_ERRORS = Object.freeze({
  REQUIRED: 'Email is required',
  PATTERN: 'Please provide a properly formatted email address',
  MAX: 'Email must be at most 100 characters',
});

export const SCHEDULE_ERRORS = Object.freeze({
  REQUIRED: 'Field is required',
  MUST_BE_LONGER_THAN_3: 'Field must be longer than 3 characters',
  MUST_BE_LESS_THAN_100: 'Field must be less than 100 characters',

});

export const DATE_ERRORS = Object.freeze({
   MUST_BE_DATE: 'Field must be a valid date',
});