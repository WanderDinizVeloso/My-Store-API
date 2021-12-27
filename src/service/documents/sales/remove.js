const { SALES, ADDITION } = require('../../strings');
const { remove } = require('../../../model')(SALES);
const { inventoryUpdate } = require('../../functions');

const searchById = require('./searchById');

module.exports = async (id) => {
  const sale = await searchById(id);

  if (!sale) {
    return null;
  }

  const { deletedCount } = await remove(id);

  const deleted = { deletedCount, saleDeleted: sale };

  await inventoryUpdate(sale, ADDITION);

  return deleted;
};
