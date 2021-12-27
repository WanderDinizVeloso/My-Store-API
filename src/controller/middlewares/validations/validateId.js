const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { idVerify } = require('../../../service/validations');
const { required, noLengthEqual, isNotAString } = require('../../../service/utils/messages');
const { ID, NO_LENGTH, IS_NOT_A_STRING } = require('../../../service/utils/strings');

const LENGTH = 24;

const ERROR = {
  BAD_REQUEST_REQUIRED: {
    status: BAD_REQUEST,
    message: required(ID),
  },
  BAD_REQUEST_NO_LENGTH: {
    status: BAD_REQUEST,
    message: noLengthEqual(ID, LENGTH),
  },
  BAD_REQUEST_IS_NOT_A_STRING: {
    status: BAD_REQUEST,
    message: isNotAString(ID),
  },
};

module.exports = async (req, _res, next) => {
  const { id } = req.params;

  const verifiedId = idVerify(id, LENGTH);

  if (!verifiedId) { return next(ERROR.BAD_REQUEST_REQUIRED); }
  if (verifiedId === IS_NOT_A_STRING) { return next(ERROR.BAD_REQUEST_IS_NOT_A_STRING); }
  if (verifiedId === NO_LENGTH) { return next(ERROR.BAD_REQUEST_NO_LENGTH); }

  return next();
};
