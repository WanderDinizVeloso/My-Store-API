const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { update } = require('../../../service/documents/users');

const { modifiedSuccessfully, notFound } = require('../../../service/utils/messages');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  const newUpdate = { id, firstName, lastName, email, password };

  const updated = await update(newUpdate);

  if (!updated) {
    return next({
      status: NOT_FOUND,
      message: notFound('users'),
    });
  }

  return res
    .status(OK)
    .json({
      message: modifiedSuccessfully('user'),
      updatedUser: updated,
    });
};
