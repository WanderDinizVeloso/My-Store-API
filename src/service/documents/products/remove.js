const { PRODUCTS } = require('../../strings');
const { remove } = require('../../../model')(PRODUCTS);

const searchById = require('./searchById');

module.exports = async (id) => {
  const product = await searchById(id);

  if (!product) {
    return null;
  }

  const { deletedCount } = await remove(id);

  return { deletedCount, product };
};
