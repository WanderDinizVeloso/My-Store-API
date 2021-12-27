const { fieldVerify } = require('../../../service/validations');
const { required, noLength, isNotAString } = require('../../statusAndMessage');
const { FIRST_NAME, NO_LENGTH, IS_NOT_A_STRING } = require('../../../service/utils/strings');

const LENGTH = 3;

module.exports = async (req, _res, next) => {
  const { firstName } = req.body;

  const verifiedFirsName = fieldVerify(firstName, LENGTH);

  if (!verifiedFirsName) {
    return next(required(FIRST_NAME));
  }

  if (verifiedFirsName === IS_NOT_A_STRING) {
    return next(isNotAString(FIRST_NAME));
  }

  if (verifiedFirsName === NO_LENGTH) {
    return next(noLength(FIRST_NAME, LENGTH));
  }

  return next();
};
