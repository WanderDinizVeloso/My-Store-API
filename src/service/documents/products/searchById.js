const { PRODUCTS } = require('../../strings');
const { searchById } = require('../../../model')(PRODUCTS);

module.exports = async (id) => {
  const product = await searchById(id);

  if (!product) {
    return null;
  }

  return product;
};
