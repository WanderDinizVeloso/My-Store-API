const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { fieldVerify } = require('../../../service/validations');
const { required, noLength, isNotAString } = require('../../../service/utils/messages');
const { FIRST_NAME, NO_LENGTH, IS_NOT_A_STRING } = require('../../../service/utils/strings');

const LENGTH = 3;

const ERROR = {
  BAD_REQUEST_REQUIRED: {
    status: BAD_REQUEST,
    message: required(FIRST_NAME),
  },
  BAD_REQUEST_NO_LENGTH: {
    status: BAD_REQUEST,
    message: noLength(FIRST_NAME, LENGTH),
  },
  BAD_REQUEST_IS_NOT_A_STRING: {
    status: BAD_REQUEST,
    message: isNotAString(FIRST_NAME),
  },
};

module.exports = async (req, _res, next) => {
  const { firstName } = req.body;

  const verifiedFirsName = fieldVerify(firstName, LENGTH);

  if (!verifiedFirsName) { return next(ERROR.BAD_REQUEST_REQUIRED); }
  if (verifiedFirsName === IS_NOT_A_STRING) { return next(ERROR.BAD_REQUEST_IS_NOT_A_STRING); }
  if (verifiedFirsName === NO_LENGTH) { return next(ERROR.BAD_REQUEST_NO_LENGTH); }

  return next();
};
