export const REGEX = Object.freeze({
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*#?&{}()[\]\\'"^+,=-]{8,20}$/,
  DATE: /^\d{4}-\d{2}-\d{2}( \d{2}:\d{2})?$/
});