const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { remove } = require('../../../service/documents/users');

const { deletedSuccessfully, notFound } = require('../../../service/utils/messages');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const removed = await remove(id);

  if (!removed) {
    return next({
      status: NOT_FOUND,
      message: notFound('user'),
    });
  }

  return res
    .status(OK)
    .json({
      message: deletedSuccessfully('user'),
      deletedUser: removed,
    });
};
