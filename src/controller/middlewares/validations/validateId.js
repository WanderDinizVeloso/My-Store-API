const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { fieldVerify } = require('../../../service/validations');
const { required, noLength, isNotAString } = require('../../../service/utils/messages');
const { ID, NO_LENGTH, IS_NOT_A_STRING } = require('../../../service/utils/strings');

const lENGTH = 24;

const ERROR = {
  BAD_REQUEST_REQUIRED: {
    status: BAD_REQUEST,
    message: required(ID),
  },
  BAD_REQUEST_NO_LENGTH: {
    status: BAD_REQUEST,
    message: noLength(ID, lENGTH),
  },
  BAD_REQUEST_IS_NOT_A_STRING: {
    status: BAD_REQUEST,
    message: isNotAString(ID),
  },
};

module.exports = async (req, _res, next) => {
  const { id } = req.params;

  const verifiedId = fieldVerify(id, lENGTH);

  if (!verifiedId) { return next(ERROR.BAD_REQUEST_REQUIRED); }
  if (verifiedId === IS_NOT_A_STRING) { return next(ERROR.BAD_REQUEST_IS_NOT_A_STRING); }
  if (verifiedId === NO_LENGTH) { return next(ERROR.BAD_REQUEST_NO_LENGTH); }

  return next();
};
