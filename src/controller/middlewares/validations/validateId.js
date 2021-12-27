const { idVerify } = require('../../../service/validations');
const { required, noLengthEqual, isNotAString } = require('../../statusAndMessage');
const { ID, NO_LENGTH, IS_NOT_A_STRING } = require('../../../service/utils/strings');

const LENGTH = 24;

module.exports = async (req, _res, next) => {
  const { id } = req.params;

  const verifiedId = idVerify(id, LENGTH);

  if (!verifiedId) {
    return next(required(ID));
  }

  if (verifiedId === IS_NOT_A_STRING) {
    return next(isNotAString(ID));
  }

  if (verifiedId === NO_LENGTH) {
    return next(noLengthEqual(ID, LENGTH));
  }

  return next();
};
