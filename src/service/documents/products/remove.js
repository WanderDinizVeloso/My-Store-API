const { PRODUCTS } = require('../../strings');
const { remove, searchById } = require('../../../model')(PRODUCTS);

module.exports = async (id) => {
  const product = await searchById(id);

  if (!product) {
    return null;
  }

  const { deletedCount } = await remove(id);

  return { deletedCount, product };
};
