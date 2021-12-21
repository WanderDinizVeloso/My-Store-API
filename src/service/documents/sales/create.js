const { SALES } = require('../../utils/strings');
const { create } = require('../../../model')(SALES);
const { salesWithTotalAndAmount } = require('../../functions');

const searchById = require('./searchById');

module.exports = async ({ sales, userId }) => {
  const newSales = salesWithTotalAndAmount(sales);
  
  const date = new Date();
  const creationDate = { userId, date };
  const createdSale = { creationDate, ...newSales };

  const { insertedId } = await create(createdSale);

  const created = await searchById(insertedId);

  return created;
};