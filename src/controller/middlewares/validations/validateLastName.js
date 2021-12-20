const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifyRequeriment } = require('../../../service/validations');
const { required, notLength, notString } = require('../../../service/utils/messages');
const { LAST_NAME, NO_LENGTH, NOT_A_STRING } = require('../../../service/utils/strings');

const LENGTH = 3;

const ERROR = {
  BAD_REQUEST_REQUIRED: {
    status: BAD_REQUEST,
    message: required(LAST_NAME),
  },
  BAD_REQUEST_NOT_LENGTH: {
    status: BAD_REQUEST,
    message: notLength(LAST_NAME, LENGTH),
  },
  BAD_REQUEST_NOT_STRING: {
    status: BAD_REQUEST,
    message: notString(LAST_NAME),
  },
};

module.exports = async (req, _res, next) => {
  const { lastName } = req.body;

  const validation = verifyRequeriment(lastName, LENGTH);

  if (!validation) { return next(ERROR.BAD_REQUEST_REQUIRED); }
  if (validation === NOT_A_STRING) { return next(ERROR.BAD_REQUEST_NOT_STRING); }
  if (validation === NO_LENGTH) { return next(ERROR.BAD_REQUEST_NOT_LENGTH); }

  return next();
};
