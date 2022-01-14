const { emailVerify } = require('../../../service/validations');
const { required, invalid, isNotAString } = require('../../statusAndMessage');
const { EMAIL, IS_NOT_A_EMAIL, IS_NOT_A_STRING } = require('../../../service/strings');

module.exports = async (req, _res, next) => {
  const { email } = req.body;

  const verifiedEmail = emailVerify(email);

  switch (verifiedEmail) {
    case null:
      return next(required(EMAIL));
    case IS_NOT_A_STRING:
      return next(isNotAString(EMAIL));
    case IS_NOT_A_EMAIL:
      return next(invalid(EMAIL));
    default:
      return next();
  }
};
