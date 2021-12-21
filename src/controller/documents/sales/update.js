const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { update } = require('../../../service/documents/sales');
const { modifiedSuccessfully, notFound } = require('../../../service/utils/messages');
const { SALE } = require('../../../service/utils/strings');

const ERROR = {
  NOT_FOUND: {
    status: NOT_FOUND,
    message: notFound(SALE),
  },
};

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const dataSale = req.body;

  const newDataSale = { id, dataSale };

  const updated = await update(newDataSale);

  if (!updated) { return next(ERROR.NOT_FOUND); }

  return res
    .status(OK)
    .json({
      message: modifiedSuccessfully(SALE),
      updatedSale: updated,
    });
};