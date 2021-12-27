const { fieldVerify } = require('../../../service/validations');
const { required, noLength, isNotAString } = require('../../statusAndMessage');
const { NAME, NO_LENGTH, IS_NOT_A_STRING } = require('../../../service/utils/strings');

const LENGTH = 4;

module.exports = async (req, _res, next) => {
  const { name } = req.body;

  const verifiedName = fieldVerify(name, LENGTH);

  switch (verifiedName) {
    case null:
      return next(required(NAME));
    case IS_NOT_A_STRING:
      return next(isNotAString(NAME));
    case NO_LENGTH:
      return next(noLength(NAME, LENGTH));
    default:
      return next();
  }
};
