const { SALES, ADDITION } = require('../../utils/strings');
const { remove } = require('../../../model')(SALES);

const { updateBalance } = require('../../functions');

const searchById = require('./searchById');

module.exports = async (id) => {
  const saleDeleted = await searchById(id);

  if (!saleDeleted) {
    return null;
  }

  const { deletedCount } = await remove(id);

  const deleted = { deletedCount, saleDeleted };

  await updateBalance(saleDeleted, ADDITION);

  return deleted;
};
