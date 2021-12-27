const { emailVerify } = require('../../../service/validations');
const { required, invalid, isNotAString } = require('../../statusAndMessage');
const { EMAIL, IS_NOT_A_EMAIL, IS_NOT_A_STRING } = require('../../../service/utils/strings');

module.exports = async (req, _res, next) => {
  const { email } = req.body;

  const verifiedEmail = emailVerify(email);

  if (!verifiedEmail) {
    return next(required(EMAIL));
  }

  if (verifiedEmail === IS_NOT_A_STRING) {
    return next(isNotAString(EMAIL));
  }

  if (verifiedEmail === IS_NOT_A_EMAIL) {
    return next(invalid(EMAIL));
  }

  return next();
};
