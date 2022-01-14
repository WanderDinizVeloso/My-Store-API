const { SALES, SUBTRACTION } = require('../../strings');
const { create, searchById } = require('../../../model')(SALES);
const { includeTotalAndAmountOnSale, inventoryUpdate } = require('../../functions');

module.exports = async ({ saleData, userId }) => {
  const newSale = includeTotalAndAmountOnSale(saleData);
  
  const date = new Date();
  const creationDate = { userId, date };
  const newSaleData = { creationDate, ...newSale };

  const { insertedId } = await create(newSaleData);

  const created = await searchById(insertedId);

  await inventoryUpdate(created, SUBTRACTION);

  return created;
};
