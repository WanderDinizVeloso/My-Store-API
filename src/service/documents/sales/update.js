const { SALES } = require('../../utils/strings');
const { update } = require('../../../model')(SALES);

const searchById = require('./searchById');

module.exports = async (dataSale) => {
  const { id, ...dataSaleWithoutId } = dataSale;

  const sale = await searchById(id);

  if (!sale) {
    return null;
  }

  const modifiedSale = {
    ...sale,
    ...dataSaleWithoutId,
  };

  const { modifiedCount } = await update(modifiedSale);

  const newSaleData = await searchById(id);

  const updated = { modifiedCount, newSaleData };

  return updated;
};
