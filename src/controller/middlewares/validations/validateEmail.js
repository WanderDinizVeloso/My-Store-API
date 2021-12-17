const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifyEmail } = require('../../../service/validations');

const { required, invalid } = require('../../../service/utils/messages');

const EMAIL = 'email';

module.exports = async (req, _res, next) => {
  const { email } = req.body;

  const validation = verifyEmail(email);

  if (!validation) {
    return next({
      status: BAD_REQUEST,
      message: required(EMAIL),
    });
  }

  if (validation === invalid(EMAIL)) {
    return next({
      status: BAD_REQUEST,
      message: invalid(EMAIL),
    });
  }

  return next();
};