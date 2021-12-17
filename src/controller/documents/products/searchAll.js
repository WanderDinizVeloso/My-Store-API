const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { searchAll } = require('../../../service/documents/products');
const { notRegistered } = require('../../../service/utils/messages');

const PRODUCTS = 'products';

module.exports = async (_req, res, next) => {
  const products = await searchAll();

  if (!products) {
    return next({
      status: NOT_FOUND,
      message: notRegistered(PRODUCTS),
    });
  }

  return res
    .status(OK)
    .json({ products });
};