const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { fieldVerify } = require('../../../service/validations');
const { required, noLength, isNotAString } = require('../../../service/utils/messages');
const { CATEGORY, NO_LENGTH, IS_NOT_A_STRING } = require('../../../service/utils/strings');

const LENGTH = 4;

const ERROR = {
  BAD_REQUEST_REQUIRED: {
    status: BAD_REQUEST,
    message: required(CATEGORY),
  },
  BAD_REQUEST_NO_LENGTH: {
    status: BAD_REQUEST,
    message: noLength(CATEGORY, LENGTH),
  },
  BAD_REQUEST_IS_NOT_A_STRING: {
    status: BAD_REQUEST,
    message: isNotAString(CATEGORY),
  },
};

module.exports = async (req, _res, next) => {
  const { category } = req.body;

  const verifiedCategory = fieldVerify(category, LENGTH);

  if (!verifiedCategory) { return next(ERROR.BAD_REQUEST_REQUIRED); }
  if (verifiedCategory === IS_NOT_A_STRING) { return next(ERROR.BAD_REQUEST_IS_NOT_A_STRING); }
  if (verifiedCategory === NO_LENGTH) { return next(ERROR.BAD_REQUEST_NO_LENGTH); }

  return next();
};
