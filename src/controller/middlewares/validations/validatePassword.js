const { passwordVerify } = require('../../../service/validations');

const {
  required, noLength, isNotAString, invalidCharacters,
} = require('../../statusAndMessage');

const {
  PASSWORD, NO_LENGTH, IS_NOT_A_STRING, INVALID_PASSWORD,
} = require('../../../service/strings');

const LENGTH = 10;

module.exports = async (req, _res, next) => {
  const { password } = req.body;

  const verifiedPassword = passwordVerify(password, LENGTH);

  switch (verifiedPassword) {
    case null:
      return next(required(PASSWORD));
    case IS_NOT_A_STRING:
      return next(isNotAString(PASSWORD));
    case NO_LENGTH:
      return next(noLength(PASSWORD, LENGTH));
    case INVALID_PASSWORD:
      return next(invalidCharacters(PASSWORD));
    default:
      return next();
  }
};
