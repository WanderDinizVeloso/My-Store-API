const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { numbersVerify } = require('../../../service/validations');
const { required, isNotANumber } = require('../../../service/utils/messages');
const { PRICE, IS_NOT_A_NUMBER } = require('../../../service/utils/strings');

const DECIMAL_PLACES = 2;

const ERROR = {
  BAD_REQUEST_REQUIRED: {
    status: BAD_REQUEST,
    message: required(PRICE),
  },
  BAD_REQUEST_IS_NOT_A_NUMBER: {
    status: BAD_REQUEST,
    message: isNotANumber(PRICE),
  },
};

module.exports = async (req, _res, next) => {
  const { price } = req.body;

  const verifiedPrice = numbersVerify(price);

  if (!verifiedPrice) { return next(ERROR.BAD_REQUEST_REQUIRED); }
  if (verifiedPrice === IS_NOT_A_NUMBER) { return next(ERROR.BAD_REQUEST_IS_NOT_A_NUMBER); }

  const convertedPrice = price.toFixed(DECIMAL_PLACES);

  req.body.price = convertedPrice;

  return next();
};
