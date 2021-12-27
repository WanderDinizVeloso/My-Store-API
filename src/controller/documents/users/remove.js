const { OK } = require('http-status-codes').StatusCodes;

const { remove } = require('../../../service/documents/users');
const { deletedSuccessfully, notFound } = require('../../statusAndMessage');
const { USER } = require('../../../service/utils/strings');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const removed = await remove(id);

  if (!removed) {
    return next(notFound(USER));
  }

  return res
    .status(OK)
    .json({
      message: deletedSuccessfully(USER),
      deletedUser: removed,
    });
};
