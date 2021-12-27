const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { searchAll } = require('../../../service/documents/error');
const { notRegistered } = require('../../../service/utils/messages');
const { ERRORS } = require('../../../service/utils/strings');

const ERROR = {
  NOT_FOUND: {
    status: NOT_FOUND,
    message: notRegistered(ERRORS),
  },
};

module.exports = async (_req, res, next) => {
  const errors = await searchAll();

  if (!errors) { return next(ERROR.NOT_FOUND); }

  return res
    .status(OK)
    .json({ errors });
};
