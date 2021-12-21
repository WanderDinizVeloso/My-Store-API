const { SALES } = require('../../utils/strings');
const { update } = require('../../../model')(SALES);

const searchById = require('./searchById');
const salesWithTotalAndAmount = require('../../utils/salesWithTotalAndAmount');

module.exports = async (newDataSale) => {
  const { id, dataSale } = newDataSale;

  const result = salesWithTotalAndAmount(dataSale);

  console.log(result);

  const sale = await searchById(id);

  if (!sale) {
    return null;
  }

  const modifiedSale = {
    ...sale,
    ...result,
  };

  const { modifiedCount } = await update(modifiedSale);

  const newData = await searchById(id);

  const updated = { modifiedCount, newData };

  return updated;
};
