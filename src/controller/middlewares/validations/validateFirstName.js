const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifyRequeriment } = require('../../../service/validations');
const { required, notLength } = require('../../../service/utils/messages');
const { FIRST_NAME, NO_LENGTH } = require('../../../service/utils/strings');

const lENGTH = 3;

module.exports = async (req, _res, next) => {
  const { firstName } = req.body;

  const validation = verifyRequeriment(firstName, lENGTH);

  if (!validation) {
    return next({
      status: BAD_REQUEST,
      message: required(FIRST_NAME),
    });
  }

  if (validation === NO_LENGTH) {
    return next({
      status: BAD_REQUEST,
      message: notLength(FIRST_NAME, lENGTH),
    });
  }

  return next();
};
