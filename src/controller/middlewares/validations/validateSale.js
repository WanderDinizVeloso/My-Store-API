const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { saleVerify, productInventaryVerify } = require('../../../service/validations');

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
  const sale = req.body;

  const verifiedSale = saleVerify(sale);

  if (verifiedSale.error) { return next(ERROR.BAD_REQUEST); }

  const verifiedProductInventory = await productInventaryVerify(verifiedSale.products);

  if (verifiedProductInventory.error) {
    return next(ERROR.BAD_REQUEST_STOCK(verifiedProductInventory.errorList));
  }

  if (verifiedProductInventory.count !== sale.length) { 
    return next(ERROR.BAD_REQUEST_NOT_REGISTERED(verifiedProductInventory.notRegisteredList));
  }

  const newBody = verifiedProductInventory.products;

  req.body = newBody;

  return next();
};
