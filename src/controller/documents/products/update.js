const { OK, NOT_FOUND, BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { update } = require('../../../service/documents/products');
const { modifiedSuccessfully, notFound, registered } = require('../../../service/utils/messages');

const {
  PRODUCT, NEW_PRODUCT_NAME, PRODUCT_NAME_EXIST,
} = require('../../../service/utils/strings');

const ERROR = {
  NOT_FOUND: {
    status: NOT_FOUND,
    message: notFound(PRODUCT),
  },
  BAD_REQUEST: {
    status: BAD_REQUEST,
    message: registered(NEW_PRODUCT_NAME),
  },
};

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { name, category, unity, quantity, price } = req.body;

  const newUpdate = { id, name, category, unity, quantity, price };

  const updated = await update(newUpdate);

  if (!updated) { return next(ERROR.NOT_FOUND); }
  if (updated === PRODUCT_NAME_EXIST) { return next(ERROR.BAD_REQUEST); }

  return res
    .status(OK)
    .json({
      message: modifiedSuccessfully(PRODUCT),
      updatedProduct: updated,
    });
};
