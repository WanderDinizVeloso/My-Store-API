const createdSuccessfully = (param) =>
  `'${param}' created successfully.`;

const deletedSuccessfully = (param) =>
  `'${param}' deleted successfully,`;

const insufficientStock = (param) => 
  `Insufficient stock of products: ${param}`;

const internalError = () =>
  'sorry, internal error.';
  
const invalid = (param) =>
  `The invalid '${param}' field.`;

const invalidCaracters = (param) =>
  `The '${param}' field must contain at least: `
  + 'a capital letter, '
  + 'a number and '
  + 'a special character (!, $, #, %, _).';

const isNotANumber = (param) =>
  `The '${param}' field must be a number.`;

const isNotAString = (param) =>
  `The '${param}' field must be a string.`;

const modifiedSuccessfully = (param) =>
  `'${param}' modified successfully.`;

const noLength = (param, length) =>
  `The '${param}' field must contain at least ${length} characters`;

const noLengthBetweenTwoNumbers = (param, initialLength, finalLength) =>
  `The '${param}' field must contain between ${initialLength} and ${finalLength} characters.`;

const noLengthEqual = (param, length) =>
  `The '${param}' field must contain ${length} characters`;  

const notAuthorized = () =>
  'Request not allowed for this user.';

const notFound = (param) =>
  `'${param}' not found.`;

const notRegistered = (param) =>
  `no registered '${param}'.`;

const productNotRegistered = (param) => 
  `shopping list with unregistered products: ${param}`;

const registered = (param) =>
  `'${param}' is already.`;

const required = (param) =>
  `The '${param}' field is required.`;

module.exports = {
  createdSuccessfully,
  deletedSuccessfully,
  insufficientStock,
  internalError,
  invalid,
  invalidCaracters,
  isNotANumber,
  isNotAString,
  modifiedSuccessfully,
  noLength,
  noLengthBetweenTwoNumbers,
  noLengthEqual,
  notAuthorized,
  notFound,
  notRegistered,
  productNotRegistered,
  registered,
  required,
};
