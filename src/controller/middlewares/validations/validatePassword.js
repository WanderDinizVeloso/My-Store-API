const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifyRequeriment, verifyCaracters } = require('../../../service/validations');

const {
  required,
  notLength,
  notString,
  invalidCaracters,
} = require('../../../service/utils/messages');

const {
  PASSWORD,
  NO_LENGTH,
  NOT_A_STRING,
  INVALID_PASSWORD,
} = require('../../../service/utils/strings');

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
  BAD_REQUEST_INVALID_PASSWORD: {
    status: BAD_REQUEST,
    message: invalidCaracters(PASSWORD),
  },
};

module.exports = async (req, _res, next) => {
  const { password } = req.body;

  const validation = verifyRequeriment(password, LENGTH);
  const caractersValidation = verifyCaracters(password);

  if (!validation) { return next(ERROR.BAD_REQUEST_REQUIRED); }
  if (validation === NOT_A_STRING) { return next(ERROR.BAD_REQUEST_NOT_STRING); }
  if (caractersValidation === INVALID_PASSWORD) { return next(ERROR.BAD_REQUEST_INVALID_PASSWORD); }
  if (validation === NO_LENGTH) { return next(ERROR.BAD_REQUEST_NOT_LENGTH); }

  return next();
};
