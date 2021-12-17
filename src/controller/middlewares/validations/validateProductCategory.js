const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifyRequeriment } = require('../../../service/validations');
const { required, notLength } = require('../../../service/utils/messages');
const { CATEGORY, NO_LENGTH } = require('../../../service/utils/strings');

const lENGTH = 4;

module.exports = async (req, _res, next) => {
  const { category } = req.body;

  const validation = verifyRequeriment(category, lENGTH);

  if (!validation) {
    return next({
      status: BAD_REQUEST,
      message: required(CATEGORY),
    });
  }

  if (validation === NO_LENGTH) {
    return next({
      status: BAD_REQUEST,
      message: notLength(CATEGORY, lENGTH),
    });
  }

  return next();
};
