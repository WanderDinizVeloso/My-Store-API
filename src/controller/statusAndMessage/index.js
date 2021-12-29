const { BAD_REQUEST, NOT_FOUND, UNAUTHORIZED } = require('http-status-codes').StatusCodes;

const createdSuccessfully = (param) =>
  `'${param}' created successfully.`;

const deletedSuccessfully = (param) =>
  `'${param}' deleted successfully,`;

const modifiedSuccessfully = (param) =>
  `'${param}' modified successfully.`;

const internalError = () =>
  'sorry, internal error.';

const insufficientStock = (param) => ({
  status: BAD_REQUEST,
  message: `Insufficient stock of products: ${param}`,
});
  
const invalid = (param) => ({
  status: BAD_REQUEST,
  message: `The invalid '${param}' field.`,
});

const invalidCharacters = (param) => ({
  status: BAD_REQUEST,
  message: `The '${param}' field must contain at least: `
    + 'a capital letter, '
    + 'a number and '
    + 'a special character (!, $, #, %, _).',
});

const isNotANumber = (param) => ({
  status: BAD_REQUEST,
  message: `The '${param}' field must be a positive number.`,
});

const isNotAString = (param) => ({
  status: BAD_REQUEST,
  message: `The '${param}' field must be a string.`,
});

const noLength = (param, length) => ({
  status: BAD_REQUEST,
  message: `The '${param}' field must contain at least ${length} characters`,
});

const noLengthBetweenTwoNumbers = (param, initialLength, finalLength) => ({
  status: BAD_REQUEST,
  message: `The '${param}' field must contain between ${initialLength}`
    + ` and ${finalLength} characters.`,
});

const noLengthEqual = (param, length) => ({
  status: BAD_REQUEST,
  message: `The '${param}' field must contain ${length} characters`,
});

const notAuthorized = () => ({
  status: UNAUTHORIZED,
  message: 'Request not allowed for this user.',
});

const notFound = (param) => ({
  status: NOT_FOUND,
  message: `'${param}' not found.`,
});

const notRegistered = (param) => ({
  status: NOT_FOUND,
  message: `no registered '${param}'.`,
});

const productNotRegistered = (param) => ({
  status: BAD_REQUEST,
  message: `shopping list with unregistered products: ${param}`,
});

const registered = (param) => ({
    status: BAD_REQUEST,
    message: `'${param}' is already.`,
  });

const required = (param) => ({
  status: BAD_REQUEST,
  message: `The '${param}' field is required.`,
});

module.exports = {
  createdSuccessfully,
  deletedSuccessfully,
  insufficientStock,
  internalError,
  invalid,
  invalidCharacters,
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
