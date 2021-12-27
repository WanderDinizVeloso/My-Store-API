const { OK } = require('http-status-codes').StatusCodes;

const { remove } = require('../../../service/documents/sales');
const { deletedSuccessfully, notFound } = require('../../statusAndMessage');
const { SALE } = require('../../../service/utils/strings');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  
  const removed = await remove(id);

  if (!removed) { return next(notFound(SALE)); }

  return res
    .status(OK)
    .json({
      message: deletedSuccessfully(SALE),
      deletedUser: removed,
    });
};
