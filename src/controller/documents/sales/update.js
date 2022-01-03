const { OK } = require('http-status-codes').StatusCodes;

const { update } = require('../../../service/documents/sales');
const { modifiedSuccessfully, notFound } = require('../../statusAndMessage');
const { SALE } = require('../../../service/strings');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { _id: userId } = req.user;
  const saleData = req.body;

  const updated = await update({ id, saleData, userId });

  if (!updated) {
    return next(notFound(SALE));
  }

  return res
    .status(OK)
    .json({
      message: modifiedSuccessfully(SALE),
      updatedSale: updated,
    });
};
