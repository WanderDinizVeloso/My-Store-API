const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { fieldVerify } = require('../../../service/validations');
const { required, noLength, isNotAString } = require('../../../service/utils/messages');
const { LAST_NAME, NO_LENGTH, IS_NOT_A_STRING } = require('../../../service/utils/strings');

const LENGTH = 3;

const ERROR = {
  BAD_REQUEST_REQUIRED: {
    status: BAD_REQUEST,
    message: required(LAST_NAME),
  },
  BAD_REQUEST_NO_LENGTH: {
    status: BAD_REQUEST,
    message: noLength(LAST_NAME, LENGTH),
  },
  BAD_REQUEST_IS_NOT_A_STRING: {
    status: BAD_REQUEST,
    message: isNotAString(LAST_NAME),
  },
};

module.exports = async (req, _res, next) => {
  const { lastName } = req.body;

  const verifiedLaastName = fieldVerify(lastName, LENGTH);

  if (!verifiedLaastName) { return next(ERROR.BAD_REQUEST_REQUIRED); }
  if (verifiedLaastName === IS_NOT_A_STRING) { return next(ERROR.BAD_REQUEST_IS_NOT_A_STRING); }
  if (verifiedLaastName === NO_LENGTH) { return next(ERROR.BAD_REQUEST_NO_LENGTH); }

  return next();
};
