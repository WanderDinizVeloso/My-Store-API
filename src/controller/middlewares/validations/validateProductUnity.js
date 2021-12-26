const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { unityVerify } = require('../../../service/validations');

const {
  required, noLengthBetweenTwoNumbers, isNotAString,
} = require('../../../service/utils/messages');

const { UNITY, NO_LENGTH, IS_NOT_A_STRING } = require('../../../service/utils/strings');

const INITIAL_LENGTH = 2;
const FINAL_LENGTH = 3;

const ERROR = {
  BAD_REQUEST_REQUIRED: {
    status: BAD_REQUEST,
    message: required(UNITY),
  },
  BAD_REQUEST_NO_LENGTH: {
    status: BAD_REQUEST,
    message: noLengthBetweenTwoNumbers(UNITY, INITIAL_LENGTH, FINAL_LENGTH),
  },
  BAD_REQUEST_IS_NOT_A_STRING: {
    status: BAD_REQUEST,
    message: isNotAString(UNITY),
  },
};

module.exports = async (req, _res, next) => {
  const { unity } = req.body;

  const verifiedUnity = unityVerify(unity, INITIAL_LENGTH, FINAL_LENGTH);

  if (!verifiedUnity) { return next(ERROR.BAD_REQUEST_REQUIRED); }
  if (verifiedUnity === IS_NOT_A_STRING) { return next(ERROR.BAD_REQUEST_IS_NOT_A_STRING); }
  if (verifiedUnity === NO_LENGTH) { return next(ERROR.BAD_REQUEST_NO_LENGTH); }

  const convertedUnity = unity.toUpperCase();

  req.body.unity = convertedUnity;

  return next();
};
