const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifyRequeriment } = require('../../../service/validations');
const { required, notLength } = require('../../../service/utils/messages');
const { PASSWORD, NO_LENGTH } = require('../../../service/utils/strings');

const lENGTH = 10;

module.exports = async (req, _res, next) => {
  const { password } = req.body;

  const validation = verifyRequeriment(password, lENGTH);

  if (!validation) {
    return next({
      status: BAD_REQUEST,
      message: required(PASSWORD),
    });
  }

  if (validation === NO_LENGTH) {
    return next({
      status: BAD_REQUEST,
      message: notLength(PASSWORD, lENGTH),
    });
  }

  return next();
};
