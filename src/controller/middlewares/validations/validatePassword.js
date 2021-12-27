const { fieldVerify, caractersVerify } = require('../../../service/validations');

const {
  required, noLength, isNotAString, invalidCaracters,
} = require('../../statusAndMessage');

const {
  PASSWORD,
  NO_LENGTH,
  IS_NOT_A_STRING,
  INVALID_PASSWORD,
} = require('../../../service/utils/strings');

const LENGTH = 10;

module.exports = async (req, _res, next) => {
  const { password } = req.body;

  const verifiedPassword = fieldVerify(password, LENGTH);
  const verifiedPasswordCaracters = caractersVerify(password);

  if (!verifiedPassword) {
    return next(required(PASSWORD));
  }

  if (verifiedPassword === IS_NOT_A_STRING) {
    return next(isNotAString(PASSWORD));
  }

  if (verifiedPassword === NO_LENGTH) {
    return next(noLength(PASSWORD, LENGTH));
  }

  if (verifiedPasswordCaracters === INVALID_PASSWORD) {
    return next(invalidCaracters(PASSWORD));
  }  

  return next();
};
