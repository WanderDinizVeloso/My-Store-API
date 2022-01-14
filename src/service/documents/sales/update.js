const { SALES, ADDITION, SUBTRACTION } = require('../../strings');
const { update, searchById } = require('../../../model')(SALES);
const { includeTotalAndAmountOnSale, inventoryUpdate } = require('../../functions');

module.exports = async ({ id, saleData, userId }) => {
  const newSaleData = includeTotalAndAmountOnSale(saleData);
  const sale = await searchById(id);
  
  if (!sale) {
    return null;
  }

  await inventoryUpdate(sale, ADDITION);

  const date = new Date();
  const modifiedDate = { userId, date };
  const modifiedSale = { modifiedDate, ...sale, ...newSaleData };
    
  const { modifiedCount } = await update(modifiedSale);
  
  const newData = await searchById(id);
  
  const updated = { modifiedCount, newData };
  
  await inventoryUpdate(newData, SUBTRACTION);

  return updated;
};
