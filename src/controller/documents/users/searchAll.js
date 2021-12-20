const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { searchAll } = require('../../../service/documents/users');
const { notRegistered } = require('../../../service/utils/messages');
const { USERS } = require('../../../service/utils/strings');

const ERROR = {
  NOT_FOUND: {
    status: NOT_FOUND,
    message: notRegistered(USERS),
  },
};

module.exports = async (_req, res, next) => {
  const users = await searchAll();

  if (!users) { return next(ERROR.NOT_FOUND); }

  return res
    .status(OK)
    .json({ users });
};
