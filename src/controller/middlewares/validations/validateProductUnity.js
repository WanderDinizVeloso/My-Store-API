const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifyUnity } = require('../../../service/validations');

const { required, notBetweenTwoNumbers } = require('../../../service/utils/messages');

const UNITY = 'unity';
const INITIAL_LENGTH = 2;
const FINAL_LENGTH = 3;
const MESSAGE_NO_LENGTH = 'no length';

module.exports = async (req, _res, next) => {
  const { unity } = req.body;

  const validation = verifyUnity(unity, INITIAL_LENGTH, FINAL_LENGTH);

  if (!validation) {
    return next({
      status: BAD_REQUEST,
      message: required(UNITY),
    });
  }

  if (validation === MESSAGE_NO_LENGTH) {
    return next({
      status: BAD_REQUEST,
      message: notBetweenTwoNumbers(UNITY, INITIAL_LENGTH, FINAL_LENGTH),
    });
  }

  const upperCase = unity.toUpperCase();

  req.body.unity = upperCase;

  return next();
};
