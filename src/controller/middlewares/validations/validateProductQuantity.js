const { numbersVerify } = require('../../../service/validations');
const { required, isNotANumber } = require('../../statusAndMessage');
const { QUANTITY, IS_NOT_A_NUMBER } = require('../../../service/utils/strings');

const DECIMAL_PLACES = 3;

module.exports = async (req, _res, next) => {
  const { quantity } = req.body;

  const verifiedQuantity = numbersVerify(quantity);

  if (!verifiedQuantity) {
    return next(required(QUANTITY));
  }

  if (verifiedQuantity === IS_NOT_A_NUMBER) {
    return next(isNotANumber(QUANTITY));
  }

  const convertedQuantity = quantity.toFixed(DECIMAL_PLACES);

  req.body.quantity = convertedQuantity;

  return next();
};
