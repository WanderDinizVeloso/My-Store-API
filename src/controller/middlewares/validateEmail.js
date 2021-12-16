const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifyEmail } = require('../../service/validations');

const MESSAGE_NOT_EXISTS = 'The "email" field is required';

const MESSAGE_NOT_VALID = 'The invalid "email" field';

module.exports = async (req, _res, next) => {
  const { email } = req.body;

  const validation = verifyEmail(email);

  if (!validation) {
    return next({
      status: BAD_REQUEST,
      message: MESSAGE_NOT_EXISTS,
    });
  }

  if (validation === 'invalid email') {
    return next({
      status: BAD_REQUEST,
      message: MESSAGE_NOT_VALID,
    });
  }

  return next();
};
