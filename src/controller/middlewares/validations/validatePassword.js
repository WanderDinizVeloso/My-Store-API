const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { fieldVerify, caractersVerify } = require('../../../service/validations');

const {
  required, noLength, isNotAString, invalidCaracters,
} = require('../../../service/utils/messages');

const {
  PASSWORD,
  NO_LENGTH,
  IS_NOT_A_STRING,
  INVALID_PASSWORD,
} = require('../../../service/utils/strings');

const LENGTH = 10;

const ERROR = {
  BAD_REQUEST_REQUIRED: {
    status: BAD_REQUEST,
    message: required(PASSWORD),
  },
  BAD_REQUEST_NO_LENGTH: {
    status: BAD_REQUEST,
    message: noLength(PASSWORD, LENGTH),
  },
  BAD_REQUEST_IS_NOT_A_STRING: {
    status: BAD_REQUEST,
    message: isNotAString(PASSWORD),
  },
  BAD_REQUEST_INVALID_PASSWORD: {
    status: BAD_REQUEST,
    message: invalidCaracters(PASSWORD),
  },
};

module.exports = async (req, _res, next) => {
  const { password } = req.body;

  const verifiedPassword = fieldVerify(password, LENGTH);
  const verifiedPasswordCaracters = caractersVerify(password);

  if (!verifiedPassword) { return next(ERROR.BAD_REQUEST_REQUIRED); }
  if (verifiedPassword === IS_NOT_A_STRING) { return next(ERROR.BAD_REQUEST_IS_NOT_A_STRING); }
  if (verifiedPassword === NO_LENGTH) { return next(ERROR.BAD_REQUEST_NO_LENGTH); }
  
  if (verifiedPasswordCaracters === INVALID_PASSWORD) {
    return next(ERROR.BAD_REQUEST_INVALID_PASSWORD);
  }  

  return next();
};
