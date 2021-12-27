const { OK } = require('http-status-codes').StatusCodes;

const { searchAll } = require('../../../service/documents/error');
const { notRegistered } = require('../../statusAndMessage');
const { ERRORS } = require('../../../service/strings');

module.exports = async (_req, res, next) => {
  const errors = await searchAll();

  if (!errors) {
    return next(notRegistered(ERRORS));
  }

  return res
    .status(OK)
    .json({ errors });
};
