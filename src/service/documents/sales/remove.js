const { SALES } = require('../../utils/strings');
const { remove } = require('../../../model')(SALES);

const searchById = require('./searchById');

module.exports = async (id) => {
  const saleDeleted = await searchById(id);

  if (!saleDeleted) {
    return null;
  }

  const { deletedCount } = await remove(id);

  const deleted = { deletedCount, saleDeleted };
  console.log(deleted);

  return deleted;
};
