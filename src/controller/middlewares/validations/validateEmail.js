const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifyEmail } = require('../../../service/validations');
const { required, invalid } = require('../../../service/utils/messages');
const { EMAIL, NOT_A_EMAIL } = require('../../../service/utils/strings');

const ERROR = {
  BAD_REQUEST_REQUIRED: {
    status: BAD_REQUEST,
    message: required(EMAIL),
  },
  BAD_REQUEST_INVALID: {
    status: BAD_REQUEST,
    message: invalid(EMAIL),
  },
};

module.exports = async (req, _res, next) => {
  const { email } = req.body;

  const validation = verifyEmail(email);

  if (!validation) { return next(ERROR.BAD_REQUEST_REQUIRED); }
  if (validation === NOT_A_EMAIL) { return next(ERROR.BAD_REQUEST_INVALID); }

  return next();
};
