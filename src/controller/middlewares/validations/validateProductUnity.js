const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifyUnity } = require('../../../service/validations');
const { required, notBetweenTwoNumbers } = require('../../../service/utils/messages');
const { UNITY, NO_LENGTH } = require('../../../service/utils/strings');

const INITIAL_LENGTH = 2;
const FINAL_LENGTH = 3;

const ERROR = {
  BAD_REQUEST_REQUIRED: {
    status: BAD_REQUEST,
    message: required(UNITY),
  },
  BAD_REQUEST_NOT_LENGTH: {
    status: BAD_REQUEST,
    message: notBetweenTwoNumbers(UNITY, INITIAL_LENGTH, FINAL_LENGTH),
  },
};

module.exports = async (req, _res, next) => {
  const { unity } = req.body;

  const validation = verifyUnity(unity, INITIAL_LENGTH, FINAL_LENGTH);

  if (!validation) { return next(ERROR.BAD_REQUEST_REQUIRED); }
  if (validation === NO_LENGTH) { return next(ERROR.BAD_REQUEST_NOT_LENGTH); }

  const upperCase = unity.toUpperCase();

  req.body.unity = upperCase;

  return next();
};
