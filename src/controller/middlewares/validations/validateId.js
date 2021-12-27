const { idVerify } = require('../../../service/validations');
const { required, noLengthEqual, isNotAString } = require('../../statusAndMessage');
const { ID, NO_LENGTH, IS_NOT_A_STRING } = require('../../../service/utils/strings');

const LENGTH = 24;

module.exports = async (req, _res, next) => {
  const { id } = req.params;

  const verifiedId = idVerify(id, LENGTH);

  switch (verifiedId) {
    case null:
      return next(required(ID));
    case IS_NOT_A_STRING:
      return next(isNotAString(ID));
    case NO_LENGTH:
      return next(noLengthEqual(ID, LENGTH));
    default:
      return next();
  }
};
