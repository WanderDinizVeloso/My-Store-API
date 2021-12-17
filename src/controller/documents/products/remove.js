const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { remove } = require('../../../service/documents/products');
const { deletedSuccessfully, notFound } = require('../../../service/utils/messages');
const { PRODUCT } = require('../../../service/utils/strings');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  
  const removed = await remove(id);

  if (!removed) {
    return next({
      status: NOT_FOUND,
      message: notFound(PRODUCT),
    });
  }

  return res
    .status(OK)
    .json({
      message: deletedSuccessfully(PRODUCT),
      deletedUser: removed,
    });
};
