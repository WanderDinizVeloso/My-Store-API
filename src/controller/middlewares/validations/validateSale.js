const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { verifySales, verifyProductInventary } = require('../../../service/validations');

const {
  invalid,
  insufficientStock,
  productNotRegistered,
} = require('../../../service/utils/messages');

const { SALE } = require('../../../service/utils/strings');

const ERROR = {
  BAD_REQUEST: {
    status: BAD_REQUEST,
    message: invalid(SALE),
  },
  BAD_REQUEST_NOT_REGISTERED: (productList) => ({
    status: BAD_REQUEST,
    message: productNotRegistered(productList),
  }),
  BAD_REQUEST_STOCK: (productList) => ({
    status: BAD_REQUEST,
    message: insufficientStock(productList),
  }),
};

module.exports = async (req, _res, next) => {
  const saleData = req.body;

  const validation = verifySales(saleData);

  if (validation.error) { return next(ERROR.BAD_REQUEST); }

  const checkInventary = await verifyProductInventary(validation.products);

  if (checkInventary.error) { return next(ERROR.BAD_REQUEST_STOCK(checkInventary.errorList)); }

  if (checkInventary.count !== saleData.length) { 
    return next(ERROR.BAD_REQUEST_NOT_REGISTERED(checkInventary.notRegisteredList));
  }

  const newBody = checkInventary.products;

  req.body = newBody;

  return next();
};
