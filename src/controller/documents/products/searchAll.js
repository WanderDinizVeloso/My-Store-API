const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { searchAll } = require('../../../service/documents/products');
const { notRegistered } = require('../../../service/utils/messages');
const { PRODUCTS } = require('../../../service/utils/strings');

const ERROR = {
  NOT_FOUND: {
    status: NOT_FOUND,
    message: notRegistered(PRODUCTS),
  },
};

module.exports = async (_req, res, next) => {
  const products = await searchAll();

  if (!products) { return next(ERROR.NOT_FOUND); }

  return res
    .status(OK)
    .json({ products });
};
