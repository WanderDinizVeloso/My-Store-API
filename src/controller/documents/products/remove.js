const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { remove } = require('../../../service/documents/products');
const { deletedSuccessfully, notFound } = require('../../../service/utils/messages');
const { PRODUCT } = require('../../../service/utils/strings');

const ERROR = {
  NOT_FOUND: {
    status: NOT_FOUND,
    message: notFound(PRODUCT),
  },
};

module.exports = async (req, res, next) => {
  const { id } = req.params;
  
  const removed = await remove(id);

  if (!removed) { return next(ERROR.NOT_FOUND); }

  return res
    .status(OK)
    .json({
      message: deletedSuccessfully(PRODUCT),
      deletedProduct: removed,
    });
};
