const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const MESSAGE_NOT_FOUND = 'no registered user';

const { searchAll } = require('../../service/documents/users');

module.exports = async (_req, res, next) => {
  const users = await searchAll();

  if (!users) {
    return next({
      status: NOT_FOUND,
      message: MESSAGE_NOT_FOUND,
    });
  }

  return res
    .status(OK)
    .json({ users });
};
