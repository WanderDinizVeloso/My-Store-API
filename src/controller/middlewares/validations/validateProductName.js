const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifyRequeriment } = require('../../../service/validations');
const { required, notLength, notString } = require('../../../service/utils/messages');
const { NAME, NO_LENGTH, NOT_A_STRING } = require('../../../service/utils/strings');

const LENGTH = 4;

const ERROR = {
  BAD_REQUEST_REQUIRED: {
    status: BAD_REQUEST,
    message: required(NAME),
  },
  BAD_REQUEST_NOT_LENGTH: {
    status: BAD_REQUEST,
    message: notLength(NAME, LENGTH),
  },
  BAD_REQUEST_NOT_STRING: {
    status: BAD_REQUEST,
    message: notString(NAME),
  },
};

module.exports = async (req, _res, next) => {
  const { name } = req.body;

  const validation = verifyRequeriment(name, LENGTH);

  if (!validation) { return next(ERROR.BAD_REQUEST_REQUIRED); }
  if (validation === NO_LENGTH) { return next(ERROR.BAD_REQUEST_NOT_LENGTH); }
  if (validation === NOT_A_STRING) { return next(ERROR.BAD_REQUEST_NOT_STRING); }

  return next();
};
