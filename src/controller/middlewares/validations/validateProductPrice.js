const { numbersVerify } = require('../../../service/validations');
const { required, isNotANumber } = require('../../statusAndMessage');
const { PRICE, IS_NOT_A_NUMBER } = require('../../../service/strings');

const DECIMAL_PLACES = 2;

module.exports = async (req, _res, next) => {
  const { price } = req.body;

  const verifiedPrice = numbersVerify(price);

  switch (verifiedPrice) {
    case null:
      return next(required(PRICE));
    case IS_NOT_A_NUMBER:
      return next(isNotANumber(PRICE));
    default:
      req.body.price = price.toFixed(DECIMAL_PLACES);      
      return next();
  }
};
