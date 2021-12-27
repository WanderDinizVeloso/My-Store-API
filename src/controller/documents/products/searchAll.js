const { OK } = require('http-status-codes').StatusCodes;

const { searchAll } = require('../../../service/documents/products');
const { notRegistered } = require('../../statusAndMessage');
const { PRODUCTS } = require('../../../service/utils/strings');

module.exports = async (_req, res, next) => {
  const products = await searchAll();

  if (!products) {
    return next(notRegistered(PRODUCTS));
  }

  return res
    .status(OK)
    .json({ products });
};
