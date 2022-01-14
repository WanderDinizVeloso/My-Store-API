const { stringsVerify } = require('../../../service/validations');
const { required, noLength, isNotAString } = require('../../statusAndMessage');
const { LAST_NAME, NO_LENGTH, IS_NOT_A_STRING } = require('../../../service/strings');

const LENGTH = 3;

module.exports = async (req, _res, next) => {
  const { lastName } = req.body;

  const verifiedLastName = stringsVerify(lastName, LENGTH);
  
  switch (verifiedLastName) {
    case null:
      return next(required(LAST_NAME));
    case IS_NOT_A_STRING:
      return next(isNotAString(LAST_NAME));
    case NO_LENGTH:
      return next(noLength(LAST_NAME, LENGTH));
    default:
      return next();
  }
};
