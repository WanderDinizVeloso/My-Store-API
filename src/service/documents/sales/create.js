const { SALES, SUBTRACTION } = require('../../strings');
const { create } = require('../../../model')(SALES);
const { includeTotalAndAmountOnSale, inventoryUpdate } = require('../../functions');

const searchById = require('./searchById');

module.exports = async ({ sale, userId }) => {
  const newSale = includeTotalAndAmountOnSale(sale);
  
  const date = new Date();
  const creationDate = { userId, date };
  const newSaleData = { creationDate, ...newSale };

  const { insertedId } = await create(newSaleData);

  const created = await searchById(insertedId);

  await inventoryUpdate(created, SUBTRACTION);

  return created;
};
