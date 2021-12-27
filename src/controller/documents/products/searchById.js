const { OK } = require('http-status-codes').StatusCodes;

const { searchById } = require('../../../service/documents/products');
const { notFound } = require('../../statusAndMessage');
const { PRODUCT } = require('../../../service/utils/strings');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const product = await searchById(id);

  if (!product) { return next(notFound(PRODUCT)); }

  return res
    .status(OK)
    .json({ product });
};
