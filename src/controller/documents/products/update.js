const { OK } = require('http-status-codes').StatusCodes;

const { update } = require('../../../service/documents/products');
const { modifiedSuccessfully, notFound, registered } = require('../../statusAndMessage');

const {
  PRODUCT, NEW_PRODUCT_NAME, PRODUCT_NAME_EXIST,
} = require('../../../service/strings');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { name, category, unity, quantity, price } = req.body;

  const updated = await update({ id, name, category, unity, quantity, price });

  if (!updated) {
    return next(notFound(PRODUCT));
  }

  if (updated === PRODUCT_NAME_EXIST) {
    return next(registered(NEW_PRODUCT_NAME));
  }

  return res
    .status(OK)
    .json({
      message: modifiedSuccessfully(PRODUCT),
      updatedProduct: updated,
    });
};
