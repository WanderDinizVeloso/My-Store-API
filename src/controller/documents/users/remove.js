const { OK, NOT_FOUND, UNAUTHORIZED } = require('http-status-codes').StatusCodes;

const { remove } = require('../../../service/documents/users');
const { deletedSuccessfully, notFound } = require('../../../service/utils/messages');
const { notAuthorization } = require('../../../service/utils/messages');

const USER = 'user';

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { email, role } = req.user;

  const removed = await remove({ id, email, role });

  if (!removed) {
    return next({
      status: NOT_FOUND, message: notFound(USER),
    });
  }

  if (removed === notAuthorization()) {
    return next({
      status: UNAUTHORIZED, message: notAuthorization(),
    });
  }

  return res
    .status(OK)
    .json({
      message: deletedSuccessfully(USER), deletedUser: removed,
    });
};
