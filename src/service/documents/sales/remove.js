const { SALES } = require('../../utils/strings');
const { remove } = require('../../../model')(SALES);

const searchById = require('./searchById');

module.exports = async (id) => {
  const sale = await searchById(id);

  if (!sale) {
    return null;
  }

  const { deletedCount } = await remove(id);

  const deleted = { deletedCount, sale };

  return deleted;
};
