const error = require('./error');
const wrapper = require('./wrapper');
const validateEmail = require('./validateEmail');
const validateFirstName = require('./validateFirstName');
const validateLastName = require('./validateLastName');
const validateId = require('./validateId');
const validatePassword = require('./validatePassword');

module.exports = {
  error,
  wrapper,
  validateEmail,
  validateFirstName,
  validateLastName,
  validateId,
  validatePassword,
};
