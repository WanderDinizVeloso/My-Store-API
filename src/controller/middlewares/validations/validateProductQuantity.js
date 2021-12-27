const { numbersVerify } = require('../../../service/validations');
const { required, isNotANumber } = require('../../statusAndMessage');
const { QUANTITY, IS_NOT_A_NUMBER } = require('../../../service/strings');

const DECIMAL_PLACES = 3;

module.exports = async (req, _res, next) => {
  const { quantity } = req.body;

  const verifiedQuantity = numbersVerify(quantity);
  const convertedQuantity = quantity.toFixed(DECIMAL_PLACES);

  switch (verifiedQuantity) {
    case null:
      return next(required(QUANTITY));
    case IS_NOT_A_NUMBER:
      return next(isNotANumber(QUANTITY));
    default:
      req.body.quantity = convertedQuantity;
      return next();
  }
};
