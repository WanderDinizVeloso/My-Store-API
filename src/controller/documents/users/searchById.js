const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { searchById } = require('../../../service/documents/users');

const MESSAGE_NOT_FOUND = 'user not found';

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const user = await searchById(id);

  if (!user) {
    return next({
      status: NOT_FOUND,
      message: MESSAGE_NOT_FOUND,
    });
  }

  return res
    .status(OK)
    .json({ user });
};