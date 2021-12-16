const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifyRequeriment } = require('../../../service/validations');

const { required, notLength } = require('../../../service/utils/messages');

const FIRST_NAME = 'firstName';
const lENGTH = 3;
const MESSAGE_NO_LENGTH = 'no length';

module.exports = async (req, _res, next) => {
  const { firstName } = req.body;

  const validation = verifyRequeriment(firstName, lENGTH);

  if (!validation) {
    return next({
      status: BAD_REQUEST,
      message: required(FIRST_NAME),
    });
  }

  if (validation === MESSAGE_NO_LENGTH) {
    return next({
      status: BAD_REQUEST,
      message: notLength(FIRST_NAME, lENGTH),
    });
  }

  return next();
};
