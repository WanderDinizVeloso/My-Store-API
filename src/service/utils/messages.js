const required = (param) =>
  `The '${param}' field is required.`;

const invalid = (param) =>
  `The invalid '${param}' field.`;

const notLength = (param, length) =>
  `The '${param}' field must contain at least ${length} characters`;

const createdSuccessfully = (param) => 
  `${param} created successfully.`;

const deletedSuccessfully = (param) =>
  `${param} deleted successfully,`;

const modifiedSuccessfully = (param) =>
  `${param} modified successfully.`;

const notFound = (param) =>
  `${param} not found.`;

const notRegistered = (param) =>
  `no registered ${param}.`;

  const registered = () =>
  'User email is already.';

module.exports = {
  required,
  invalid,
  notLength,
  createdSuccessfully,
  deletedSuccessfully,
  modifiedSuccessfully,
  notFound,
  notRegistered,
  registered,
};
