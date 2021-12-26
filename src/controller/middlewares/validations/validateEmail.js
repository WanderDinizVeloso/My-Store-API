const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { emailVerify } = require('../../../service/validations');
const { required, invalid, isNotAString } = require('../../../service/utils/messages');
const { EMAIL, IS_NOT_A_EMAIL, IS_NOT_A_STRING } = require('../../../service/utils/strings');

const ERROR = {
  BAD_REQUEST_REQUIRED: {
    status: BAD_REQUEST,
    message: required(EMAIL),
  },
  BAD_REQUEST_INVALID: {
    status: BAD_REQUEST,
    message: invalid(EMAIL),
  },
  BAD_REQUEST_NOT_A_STRING: {
    status: BAD_REQUEST,
    message: isNotAString(EMAIL),
  },
};

module.exports = async (req, _res, next) => {
  const { email } = req.body;

  const verifiedEmail = emailVerify(email);

  if (!verifiedEmail) { return next(ERROR.BAD_REQUEST_REQUIRED); }
  if (verifiedEmail === IS_NOT_A_STRING) { return next(ERROR.BAD_REQUEST_NOT_A_STRING); }
  if (verifiedEmail === IS_NOT_A_EMAIL) { return next(ERROR.BAD_REQUEST_INVALID); }

  return next();
};
