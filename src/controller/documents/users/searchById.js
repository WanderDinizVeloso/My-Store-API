const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { searchById } = require('../../../service/documents/users');

const { notFound } = require('../../../service/utils/messages');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const user = await searchById(id);

  if (!user) {
    return next({
      status: NOT_FOUND,
      message: notFound('user'),
    });
  }

  return res
    .status(OK)
    .json({ user });
};