const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifyRequeriment } = require('../../../service/validations');

const { required, notLength } = require('../../../service/utils/messages');

const NAME = 'name';
const lENGTH = 4;
const MESSAGE_NO_LENGTH = 'no length';

module.exports = async (req, _res, next) => {
  const { name } = req.body;

  const validation = verifyRequeriment(name, lENGTH);

  if (!validation) {
    return next({
      status: BAD_REQUEST,
      message: required(NAME),
    });
  }

  if (validation === MESSAGE_NO_LENGTH) {
    return next({
      status: BAD_REQUEST,
      message: notLength(NAME, lENGTH),
    });
  }

  return next();
};
