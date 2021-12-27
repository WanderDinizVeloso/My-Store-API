const { CREATED } = require('http-status-codes').StatusCodes;

const { create } = require('../../../service/documents/sales');
const { createdSuccessfully } = require('../../statusAndMessage');
const { SALE } = require('../../../service/strings');

module.exports = async (req, res, _next) => {
  const sale = req.body;
  const { _id: userId } = req.user;

  const created = await create({ sale, userId });

  return res
    .status(CREATED)
    .json({
      message: createdSuccessfully(SALE),
      createdSale: created,
    });
};
