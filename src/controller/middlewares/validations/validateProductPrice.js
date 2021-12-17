const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifyNumbers } = require('../../../service/validations');
const { required, notNumber } = require('../../../service/utils/messages');
const { PRICE, NOT_A_NUMBER } = require('../../../service/utils/strings');

const DECIMAL_PLACES = 2;

module.exports = async (req, _res, next) => {
  const { price } = req.body;

  const validation = verifyNumbers(price);

  if (!validation) {
    return next({
      status: BAD_REQUEST,
      message: required(PRICE),
    });
  }

  if (validation === NOT_A_NUMBER) {
    return next({
      status: BAD_REQUEST,
      message: notNumber(PRICE),
    });
  }

  const convertDecimalPlaces = price.toFixed(DECIMAL_PLACES);

  req.body.price = convertDecimalPlaces;

  return next();
};
