const { OK } = require('http-status-codes').StatusCodes;

const { searchAll } = require('../../../service/documents/users');
const { notRegistered } = require('../../statusAndMessage');
const { USERS } = require('../../../service/utils/strings');

module.exports = async (_req, res, next) => {
  const users = await searchAll();

  if (!users) { return next(notRegistered(USERS)); }

  return res
    .status(OK)
    .json({ users });
};
