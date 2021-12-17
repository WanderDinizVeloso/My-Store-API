const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifyRequeriment } = require('../../../service/validations');
const { required, notLength } = require('../../../service/utils/messages');
const { CATEGORY } = require('../../../service/utils/strings');

const lENGTH = 4;
const MESSAGE_NO_LENGTH = 'no length';

module.exports = async (req, _res, next) => {
  const { category } = req.body;

  const validation = verifyRequeriment(category, lENGTH);

  if (!validation) {
    return next({
      status: BAD_REQUEST,
      message: required(CATEGORY),
    });
  }

  if (validation === MESSAGE_NO_LENGTH) {
    return next({
      status: BAD_REQUEST,
      message: notLength(CATEGORY, lENGTH),
    });
  }

  return next();
};
