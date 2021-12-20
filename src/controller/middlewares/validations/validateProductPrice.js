const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifyNumbers } = require('../../../service/validations');
const { required, notNumber } = require('../../../service/utils/messages');
const { PRICE, NOT_A_NUMBER } = require('../../../service/utils/strings');

const DECIMAL_PLACES = 2;

const ERROR = {
  BAD_REQUEST_REQUIRED: {
    status: BAD_REQUEST,
    message: required(PRICE),
  },
  BAD_REQUEST_NOT_NUMBER: {
    status: BAD_REQUEST,
    message: notNumber(PRICE),
  },
};

module.exports = async (req, _res, next) => {
  const { price } = req.body;

  const validation = verifyNumbers(price);

  if (!validation) { return next(ERROR.BAD_REQUEST_REQUIRED); }
  if (validation === NOT_A_NUMBER) { return next(ERROR.BAD_REQUEST_NOT_NUMBER); }

  const convertDecimalPlaces = price.toFixed(DECIMAL_PLACES);

  req.body.price = convertDecimalPlaces;

  return next();
};
