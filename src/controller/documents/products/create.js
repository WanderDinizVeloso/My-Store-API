const { CREATED, BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { create } = require('../../../service/documents/products');
const { createdSuccessfully, registered } = require('../../../service/utils/messages');
const { PRODUCT } = require('../../../service/utils/strings');

const ERROR = {
  BAD_REQUEST: {
    status: BAD_REQUEST,
    message: registered(PRODUCT),
  },
};

module.exports = async (req, res, next) => {
  const { name, category, unity, quantity, price } = req.body;

  const newProduct = { name, category, unity, quantity, price };

  const created = await create(newProduct);

  if (!created) { return next(ERROR.BAD_REQUEST); }

  return res
    .status(CREATED)
    .json({
      message: createdSuccessfully(PRODUCT),
      createdProduct: created,
    });
};
