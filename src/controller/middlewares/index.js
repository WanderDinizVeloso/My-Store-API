const error = require('./error/error');
const wrapper = require('./utils/wrapper');
const validateEmail = require('./validations/validateEmail');
const validateFirstName = require('./validations/validateFirstName');
const validateLastName = require('./validations/validateLastName');
const validateId = require('./validations/validateId');
const validatePassword = require('./validations/validatePassword');
const validateProductCategory = require('./validations/validateProductCategory');
const validateProductName = require('./validations/validateProductName');
const validateProductPrice = require('./validations/validateProductPrice');
const validateProductQuantity = require('./validations/validateProductQuantity');
const validateProductUnity = require('./validations/validateProductUnity');
const authentication = require('./auth/authentication');
const userAuthorization = require('./auth/userAuthorization');

module.exports = {
  error,
  wrapper,
  validateEmail,
  validateFirstName,
  validateLastName,
  validateId,
  validatePassword,
  validateProductCategory,
  validateProductName,
  validateProductPrice,
  validateProductQuantity,
  validateProductUnity,
  authentication,
  userAuthorization,
};
