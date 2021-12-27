const { CREATED } = require('http-status-codes').StatusCodes;

const { create } = require('../../../service/documents/products');
const { createdSuccessfully, registered } = require('../../statusAndMessage');
const { PRODUCT } = require('../../../service/utils/strings');

module.exports = async (req, res, next) => {
  const { name, category, unity, quantity, price } = req.body;

  const newProduct = { name, category, unity, quantity, price };

  const created = await create(newProduct);

  if (!created) { return next(registered(PRODUCT)); }

  return res
    .status(CREATED)
    .json({
      message: createdSuccessfully(PRODUCT),
      createdProduct: created,
    });
};
