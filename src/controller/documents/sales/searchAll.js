const { OK } = require('http-status-codes').StatusCodes;

const { searchAll } = require('../../../service/documents/sales');
const { notRegistered } = require('../../statusAndMessage');
const { SALES } = require('../../../service/utils/strings');

module.exports = async (_req, res, next) => {
  const sales = await searchAll();

  if (!sales) {
    return next(notRegistered(SALES));
  }

  return res
    .status(OK)
    .json({ sales });
};
