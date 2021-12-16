const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifyRequeriment } = require('../../service/validations');

const { required, notLength } = require('../../service/utils/messages');

const PASSWORD = 'password';
const lENGTH = 10;
const MESSAGE_NO_LENGTH = 'no length';

module.exports = async (req, _res, next) => {
  const { password } = req.body;

  const validation = verifyRequeriment(password, lENGTH);

  if (!validation) {
    return next({
      status: BAD_REQUEST,
      message: required(PASSWORD),
    });
  }

  if (validation === MESSAGE_NO_LENGTH) {
    return next({
      status: BAD_REQUEST,
      message: notLength(PASSWORD, lENGTH),
    });
  }

  return next();
};
