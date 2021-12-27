const { fieldVerify } = require('../../../service/validations');
const { required, noLength, isNotAString } = require('../../statusAndMessage');
const { CATEGORY, NO_LENGTH, IS_NOT_A_STRING } = require('../../../service/utils/strings');

const LENGTH = 4;

module.exports = async (req, _res, next) => {
  const { category } = req.body;

  const verifiedCategory = fieldVerify(category, LENGTH);

  if (!verifiedCategory) {
    return next(required(CATEGORY));
  }

  if (verifiedCategory === IS_NOT_A_STRING) {
    return next(isNotAString(CATEGORY));
  }

  if (verifiedCategory === NO_LENGTH) {
    return next(noLength(CATEGORY, LENGTH));
  }

  return next();
};
