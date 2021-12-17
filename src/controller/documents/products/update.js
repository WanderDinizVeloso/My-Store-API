const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { update } = require('../../../service/documents/products');
const { modifiedSuccessfully, notFound } = require('../../../service/utils/messages');

const PRODUCT = 'product';

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { name, category, unity, quantity, price } = req.body;

  const newUpdate = { id, name, category, unity, quantity, price };

  const updated = await update(newUpdate);

  if (!updated) {
    return next({
      status: NOT_FOUND,
      message: notFound(PRODUCT),
    });
  }

  return res
    .status(OK)
    .json({
      message: modifiedSuccessfully(PRODUCT),
      updatedUser: updated,
    });
};
