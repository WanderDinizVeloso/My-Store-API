const { fieldVerify } = require('../../../service/validations');
const { required, noLength, isNotAString } = require('../../statusAndMessage');
const { NAME, NO_LENGTH, IS_NOT_A_STRING } = require('../../../service/utils/strings');

const LENGTH = 4;

module.exports = async (req, _res, next) => {
  const { name } = req.body;

  const verifiedName = fieldVerify(name, LENGTH);

  if (!verifiedName) {
    return next(required(NAME));
  }

  if (verifiedName === IS_NOT_A_STRING) {
    return next(isNotAString(NAME));
  }

  if (verifiedName === NO_LENGTH) {
    return next(noLength(NAME, LENGTH));
  }

  return next();
};
