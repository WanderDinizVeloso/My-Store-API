const { numbersVerify } = require('../../../service/validations');
const { required, isNotANumber } = require('../../statusAndMessage');
const { PRICE, IS_NOT_A_NUMBER } = require('../../../service/utils/strings');

const DECIMAL_PLACES = 2;

module.exports = async (req, _res, next) => {
  const { price } = req.body;

  const verifiedPrice = numbersVerify(price);

  if (!verifiedPrice) {
    return next(required(PRICE));
  }

  if (verifiedPrice === IS_NOT_A_NUMBER) {
    return next(isNotANumber(PRICE));
  }

  const convertedPrice = price.toFixed(DECIMAL_PLACES);

  req.body.price = convertedPrice;

  return next();
};
