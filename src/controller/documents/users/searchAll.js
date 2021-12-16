const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { searchAll } = require('../../../service/documents/users');
const { notRegistered } = require('../../../service/utils/messages');

const USER = 'user';

module.exports = async (_req, res, next) => {
  const users = await searchAll();

  if (!users) {
    return next({
      status: NOT_FOUND,
      message: notRegistered(USER),
    });
  }

  return res
    .status(OK)
    .json({ users });
};