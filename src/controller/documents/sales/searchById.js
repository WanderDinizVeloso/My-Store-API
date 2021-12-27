const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { searchById } = require('../../../service/documents/sales');
const { notFound } = require('../../../service/utils/messages');
const { SALE } = require('../../../service/utils/strings');

const ERROR = {
  NOT_FOUND: {
    status: NOT_FOUND,
    message: notFound(SALE),
  },
};

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const sale = await searchById(id);

  if (!sale) { return next(ERROR.NOT_FOUND); }

  return res
    .status(OK)
    .json({ sale });
};
