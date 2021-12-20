const required = (param) =>
  `The '${param}' field is required.`;

const invalid = (param) =>
  `The invalid '${param}' field.`;

const notLength = (param, length) =>
  `The '${param}' field must contain at least ${length} characters`;

const notBetweenTwoNumbers = (param, initialLength, finalLength) =>
  `The '${param}' field must contain between ${initialLength} and ${finalLength} characters.`;

const notNumber = (param) =>
  `The '${param}' field must be a number.`;

const notString = (param) =>
  `The '${param}' field must be a string.`;

const createdSuccessfully = (param) => 
  `'${param}' created successfully.`;

const deletedSuccessfully = (param) =>
  `'${param}' deleted successfully,`;

const modifiedSuccessfully = (param) =>
  `'${param}' modified successfully.`;

const notFound = (param) =>
  `'${param}' not found.`;

const notRegistered = (param) =>
  `no registered '${param}'.`;

const registered = (param) =>
  `'${param}' is already.`;

const notAuthorization = () =>
  'Request not allowed for this user.';

const internalError = () =>
  'sorry, internal error.';

const invalidCaracters = (param) =>
  `The '${param}' field must contain at least one: `
  + 'capital letter, '
  + 'a number and '
  + 'a special character (!, $, #, %, _).';

module.exports = {
  required,
  invalid,
  notLength,
  notBetweenTwoNumbers,
  createdSuccessfully,
  deletedSuccessfully,
  modifiedSuccessfully,
  notFound,
  notRegistered,
  registered,
  notAuthorization,
  notNumber,
  notString,
  internalError,
  invalidCaracters,
};
