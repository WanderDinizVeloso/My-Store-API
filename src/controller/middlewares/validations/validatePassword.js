const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifyRequeriment } = require('../../../service/validations');
const { required, notLength, notString } = require('../../../service/utils/messages');
const { PASSWORD, NO_LENGTH, NOT_A_STRING } = require('../../../service/utils/strings');

const LENGTH = 10;

const ERROR = {
  BAD_REQUEST_REQUIRED: {
    status: BAD_REQUEST,
    message: required(PASSWORD),
  },
  BAD_REQUEST_NOT_LENGTH: {
    status: BAD_REQUEST,
    message: notLength(PASSWORD, LENGTH),
  },
  BAD_REQUEST_NOT_STRING: {
    status: BAD_REQUEST,
    message: notString(PASSWORD),
  },
};

module.exports = async (req, _res, next) => {
  const { password } = req.body;

  const validation = verifyRequeriment(password, LENGTH);

  if (!validation) { return next(ERROR.BAD_REQUEST_REQUIRED); }
  if (validation === NOT_A_STRING) { return next(ERROR.BAD_REQUEST_NOT_STRING); }
  if (validation === NO_LENGTH) { return next(ERROR.BAD_REQUEST_NOT_LENGTH); }

  return next();
};
