const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { fieldVerify } = require('../../../service/validations');
const { required, noLength, isNotAString } = require('../../../service/utils/messages');
const { NAME, NO_LENGTH, IS_NOT_A_STRING } = require('../../../service/utils/strings');

const LENGTH = 4;

const ERROR = {
  BAD_REQUEST_REQUIRED: {
    status: BAD_REQUEST,
    message: required(NAME),
  },
  BAD_REQUEST_NO_LENGTH: {
    status: BAD_REQUEST,
    message: noLength(NAME, LENGTH),
  },
  BAD_REQUEST_IS_NOT_A_STRING: {
    status: BAD_REQUEST,
    message: isNotAString(NAME),
  },
};

module.exports = async (req, _res, next) => {
  const { name } = req.body;

  const verifiedName = fieldVerify(name, LENGTH);

  if (!verifiedName) { return next(ERROR.BAD_REQUEST_REQUIRED); }
  if (verifiedName === IS_NOT_A_STRING) { return next(ERROR.BAD_REQUEST_IS_NOT_A_STRING); }
  if (verifiedName === NO_LENGTH) { return next(ERROR.BAD_REQUEST_NO_LENGTH); }

  return next();
};
