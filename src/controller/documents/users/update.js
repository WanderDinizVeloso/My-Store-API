const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { update } = require('../../../service/documents/users');

const MESSAGE_OK = 'successfully modified user';
const MESSAGE_NOT_FOUND = 'user not found';

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  const newUpdate = { id, firstName, lastName, email, password };

  const updated = await update(newUpdate);

  if (!updated) {
    return next({
      status: NOT_FOUND,
      message: MESSAGE_NOT_FOUND,
    });
  }

  return res
    .status(OK)
    .json({
      message: MESSAGE_OK,
      updatedUser: updated,
    });
};
