const { OK, NOT_FOUND } = require('http-status-codes').StatusCodes;

const { remove } = require('../../../service/documents/sales');
const { deletedSuccessfully, notFound } = require('../../../service/utils/messages');
const { SALE } = require('../../../service/utils/strings');

const ERROR = {
  NOT_FOUND: {
    status: NOT_FOUND,
    message: notFound(SALE),
  },
};

module.exports = async (req, res, next) => {
  const { id } = req.params;
  
  const removed = await remove(id);

  if (!removed) { return next(ERROR.NOT_FOUND); }

  return res
    .status(OK)
    .json({
      message: deletedSuccessfully(SALE),
      deletedUser: removed,
    });
};
