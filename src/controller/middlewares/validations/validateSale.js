const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifySales } = require('../../../service/validations');
const { invalid } = require('../../../service/utils/messages');
const { SALE } = require('../../../service/utils/strings');

const ERROR = {
  BAD_REQUEST: {
    status: BAD_REQUEST,
    message: invalid(SALE),
  },
};

module.exports = async (req, _res, next) => {
  const saleData = req.body;

  const validation = verifySales(saleData);

  if (validation.error) { return next(ERROR.BAD_REQUEST); }

  req.body = validation.products;

  return next();
};
