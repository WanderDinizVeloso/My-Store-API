const { OK } = require('http-status-codes').StatusCodes;

const { remove } = require('../../../service/documents/products');
const { deletedSuccessfully, notFound } = require('../../statusAndMessage');
const { PRODUCT } = require('../../../service/utils/strings');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  
  const removed = await remove(id);

  if (!removed) {
    return next(notFound(PRODUCT));
  }

  return res
    .status(OK)
    .json({
      message: deletedSuccessfully(PRODUCT),
      deletedProduct: removed,
    });
};
