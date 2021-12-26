const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { numbersVerify } = require('../../../service/validations');
const { required, isNotANumber } = require('../../../service/utils/messages');
const { QUANTITY, IS_NOT_A_NUMBER } = require('../../../service/utils/strings');

const DECIMAL_PLACES = 3;

const ERROR = {
  BAD_REQUEST_REQUIRED: {
    status: BAD_REQUEST,
    message: required(QUANTITY),
  },
  BAD_REQUEST_IS_NOT_A_NUMBER: {
    status: BAD_REQUEST,
    message: isNotANumber(QUANTITY),
  },
};

module.exports = async (req, _res, next) => {
  const { quantity } = req.body;

  const verifiedQuantity = numbersVerify(quantity);

  if (!verifiedQuantity) { return next(ERROR.BAD_REQUEST_REQUIRED); }
  if (verifiedQuantity === IS_NOT_A_NUMBER) { return next(ERROR.BAD_REQUEST_IS_NOT_A_NUMBER); }

  const convertedQuantity = quantity.toFixed(DECIMAL_PLACES);

  req.body.quantity = convertedQuantity;

  return next();
};
