const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { remove } = require('../../../service/documents/users');

const MESSAGE_OK = 'user deleted successfully';
const MESSAGE_NOT_FOUND = 'user not found';

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const removed = await remove(id);

  if (!removed) {
    return next({
      status: NOT_FOUND,
      message: MESSAGE_NOT_FOUND,
    });
  }

  return res
    .status(OK)
    .json({
      message: MESSAGE_OK,
      deletedUser: removed,
    });
};
