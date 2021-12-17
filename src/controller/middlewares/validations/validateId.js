const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifyRequeriment } = require('../../../service/validations');
const { required, notLength } = require('../../../service/utils/messages');
const { ID, NO_LENGTH } = require('../../../service/utils/strings');

const lENGTH = 24;

module.exports = async (req, _res, next) => {
  const { id } = req.params;

  const validation = verifyRequeriment(id, lENGTH);

  if (!validation) {
    return next({
      status: BAD_REQUEST,
      message: required(ID),
    });
  }

  if (validation === NO_LENGTH) {
    return next({
      status: BAD_REQUEST,
      message: notLength(ID, lENGTH),
    });
  }

  return next();
};
