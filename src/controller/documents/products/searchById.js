const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { searchById } = require('../../../service/documents/products');
const { notFound } = require('../../../service/utils/messages');
const { PRODUCT } = require('../../../service/utils/strings');

const ERROR = {
  NOT_FOUND: {
    status: NOT_FOUND,
    message: notFound(PRODUCT),
  },
};

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const product = await searchById(id);

  if (!product) { return next(ERROR.NOT_FOUND); }

  return res
    .status(OK)
    .json({ product });
};