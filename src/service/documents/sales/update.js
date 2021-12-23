const { SALES, ADDITION, SUBTRACTION } = require('../../utils/strings');
const { update } = require('../../../model')(SALES);
const { salesWithTotalAndAmount, updateBalance } = require('../../functions');

const searchById = require('./searchById');

module.exports = async ({ id, dataSale, userId }) => {
  const newSaleData = salesWithTotalAndAmount(dataSale);
  const sale = await searchById(id);
  
  if (!sale) {
    return null;
  }

  await updateBalance(sale, ADDITION);

  const date = new Date();
  const modifiedDate = { userId, date };
  const modifiedSale = { modifiedDate, ...sale, ...newSaleData };
    
  const { modifiedCount } = await update(modifiedSale);
  
  const newData = await searchById(id);  
  
  const updated = { modifiedCount, newData };
  
  await updateBalance(newData, SUBTRACTION);

  return updated;
};
