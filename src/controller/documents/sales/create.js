const { CREATED } = require('http-status-codes').StatusCodes;

const { create } = require('../../../service/documents/sales');
const { createdSuccessfully } = require('../../statusAndMessage');
const { SALE } = require('../../../service/strings');

module.exports = async (req, res, _next) => {
  const sale = req.body;
  const { _id: userId } = req.user;

  const saleData = sale.map(({ name, category, unity, quantity, price }) => ({ 
    name, category, unity, quantity, price,
  }));

  const created = await create({ saleData, userId });

  return res
    .status(CREATED)
    .json({
      message: createdSuccessfully(SALE),
      createdSale: created,
    });
};
