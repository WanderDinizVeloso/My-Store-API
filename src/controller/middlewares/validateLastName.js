const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifyRequeriment } = require('../../service/validations');

const { required, notLength } = require('../../service/utils/messages');

const LAST_NAME = 'lastName';
const lENGTH = 3;
const MESSAGE_NO_LENGTH = 'no length';

module.exports = async (req, _res, next) => {
  const { lastName } = req.body;

  const validation = verifyRequeriment(lastName, lENGTH);

  if (!validation) {
    return next({
      status: BAD_REQUEST,
      message: required(LAST_NAME),
    });
  }

  if (validation === MESSAGE_NO_LENGTH) {
    return next({
      status: BAD_REQUEST,
      message: notLength(LAST_NAME, lENGTH),
    });
  }

  return next();
};
