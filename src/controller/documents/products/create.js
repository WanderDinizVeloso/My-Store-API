const { CREATED } = require('http-status-codes').StatusCodes;

const { create } = require('../../../service/documents/products');
const { createdSuccessfully, registered } = require('../../statusAndMessage');
const { PRODUCT } = require('../../../service/strings');

module.exports = async (req, res, next) => {
  const { name, category, unity, quantity, price } = req.body;

  const created = await create({ name, category, unity, quantity, price });

  if (!created) {
    return next(registered(PRODUCT));
  }

  return res
    .status(CREATED)
    .json({
      message: createdSuccessfully(PRODUCT),
      createdProduct: created,
    });
};
