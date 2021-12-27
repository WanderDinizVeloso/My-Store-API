const { fieldVerify } = require('../../../service/validations');
const { required, noLength, isNotAString } = require('../../statusAndMessage');
const { CATEGORY, NO_LENGTH, IS_NOT_A_STRING } = require('../../../service/strings');

const LENGTH = 4;

module.exports = async (req, _res, next) => {
  const { category } = req.body;

  const verifiedCategory = fieldVerify(category, LENGTH);

  switch (verifiedCategory) {
    case null:
      return next(required(CATEGORY));
    case IS_NOT_A_STRING:
      return next(isNotAString(CATEGORY));
    case NO_LENGTH:
      return next(noLength(CATEGORY, LENGTH));
    default:
      return next();
  }
};
