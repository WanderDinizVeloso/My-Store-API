const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifyRequeriment } = require('../../../service/validations');
const { required, notLength, notString } = require('../../../service/utils/messages');
const { FIRST_NAME, NO_LENGTH, NOT_A_STRING } = require('../../../service/utils/strings');

const lENGTH = 3;

const ERROR = {
  BAD_REQUEST_REQUIRED: {
    status: BAD_REQUEST,
    message: required(FIRST_NAME),
  },
  BAD_REQUEST_NOT_LENGTH: {
    status: BAD_REQUEST,
    message: notLength(FIRST_NAME, lENGTH),
  },
  BAD_REQUEST_NOT_STRING: {
    status: BAD_REQUEST,
    message: notString(FIRST_NAME),
  },
};

module.exports = async (req, _res, next) => {
  const { firstName } = req.body;

  const validation = verifyRequeriment(firstName, lENGTH);

  if (!validation) { return next(ERROR.BAD_REQUEST_REQUIRED); }
  if (validation === NO_LENGTH) { return next(ERROR.BAD_REQUEST_NOT_LENGTH); }
  if (validation === NOT_A_STRING) { return next(ERROR.BAD_REQUEST_NOT_STRING); }

  return next();
};
