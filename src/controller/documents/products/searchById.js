const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { searchById } = require('../../../service/documents/products');
const { notFound } = require('../../../service/utils/messages');
const { PRODUCT } = require('../../../service/utils/strings');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const product = await searchById(id);

  if (!product) {
    return next({
      status: NOT_FOUND,
      message: notFound(PRODUCT),
    });
  }

  return res
    .status(OK)
    .json({ product });
};