const { CREATED, BAD_REQUEST } = require('http-status-codes').StatusCodes;

const { create } = require('../../../service/documents/sales');
const { createdSuccessfully, registered } = require('../../../service/utils/messages');
const { SALE } = require('../../../service/utils/strings');

const ERROR = {
  BAD_REQUEST: {
    status: BAD_REQUEST,
    message: registered(SALE),
  },
};

module.exports = async (req, res, next) => {
  const newSale = req.body;

  const created = await create(newSale);

  if (!created) { return next(ERROR.BAD_REQUEST); }

  return res
    .status(CREATED)
    .json({
      message: createdSuccessfully(SALE),
      createdProduct: created,
    });
};
