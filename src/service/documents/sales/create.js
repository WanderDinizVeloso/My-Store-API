const { SALES, SUBTRACTION } = require('../../utils/strings');
const { create } = require('../../../model')(SALES);
const { salesWithTotalAndAmount, updateBalance } = require('../../functions');

const searchById = require('./searchById');

module.exports = async ({ sales, userId }) => {
  const newSales = salesWithTotalAndAmount(sales);
  
  const date = new Date();
  const creationDate = { userId, date };
  const createdSale = { creationDate, ...newSales };

  const { insertedId } = await create(createdSale);

  const created = await searchById(insertedId);

  await updateBalance(created, SUBTRACTION);

  return created;
};