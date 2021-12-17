const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifyNumbers } = require('../../../service/validations');
const { required, notNumber } = require('../../../service/utils/messages');
const { QUANTITY } = require('../../../service/utils/strings');

const DECIMAL_PLACES = 3;
const MESSAGE_NOT_A_NUMBER = 'not a number';

module.exports = async (req, _res, next) => {
  const { quantity } = req.body;

  const validation = verifyNumbers(quantity);

  if (!validation) {
    return next({
      status: BAD_REQUEST,
      message: required(QUANTITY),
    });
  }

  if (validation === MESSAGE_NOT_A_NUMBER) {
    return next({
      status: BAD_REQUEST,
      message: notNumber(QUANTITY),
    });
  }

  const convertDecimalPlaces = quantity.toFixed(DECIMAL_PLACES);

  req.body.quantity = convertDecimalPlaces;

  return next();
};
