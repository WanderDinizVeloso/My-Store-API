const { CREATED, BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { create } = require('../../../service/documents/products');
const { createdSuccessfully, registered } = require('../../../service/utils/messages');

const PRODUCT = 'product';

module.exports = async (req, res, next) => {
  const { name, unity, quantity, category, price } = req.body;

  const newProduct = { name, unity, quantity, category, price };

  const created = await create(newProduct);

  if (!created) {
    return next({
      status: BAD_REQUEST,
      message: registered(PRODUCT),
    });
  }

  return res
    .status(CREATED)
    .json({
      message: createdSuccessfully(PRODUCT),
      createdProduct: created,
    });
};