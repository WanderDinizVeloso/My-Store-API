const { OK } = require('http-status-codes').StatusCodes;

const { searchById } = require('../../../service/documents/sales');
const { notFound } = require('../../statusAndMessage');
const { SALE } = require('../../../service/utils/strings');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const sale = await searchById(id);

  if (!sale) {
    return next(notFound(SALE));
  }

  return res
    .status(OK)
    .json({ sale });
};
