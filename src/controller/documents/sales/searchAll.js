const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { searchAll } = require('../../../service/documents/sales');
const { notRegistered } = require('../../../service/utils/messages');
const { SALES } = require('../../../service/utils/strings');

const ERROR = {
  NOT_FOUND: {
    status: NOT_FOUND,
    message: notRegistered(SALES),
  },
};

module.exports = async (_req, res, next) => {
  const sales = await searchAll();

  if (!sales) { return next(ERROR.NOT_FOUND); }

  return res
    .status(OK)
    .json({ sales });
};