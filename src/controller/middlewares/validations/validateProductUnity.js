const { unityVerify } = require('../../../service/validations');

const {
  required, noLengthBetweenTwoNumbers, isNotAString,
} = require('../../statusAndMessage');

const { UNITY, NO_LENGTH, IS_NOT_A_STRING } = require('../../../service/utils/strings');

const INITIAL_LENGTH = 2;
const FINAL_LENGTH = 3;

module.exports = async (req, _res, next) => {
  const { unity } = req.body;

  const verifiedUnity = unityVerify(unity, INITIAL_LENGTH, FINAL_LENGTH);

  if (!verifiedUnity) {
    return next(required(UNITY));
  }

  if (verifiedUnity === IS_NOT_A_STRING) {
    return next(isNotAString(UNITY));
  }
  
  if (verifiedUnity === NO_LENGTH) {
    return next(noLengthBetweenTwoNumbers(UNITY, INITIAL_LENGTH, FINAL_LENGTH));
  }

  const convertedUnity = unity.toUpperCase();

  req.body.unity = convertedUnity;

  return next();
};
