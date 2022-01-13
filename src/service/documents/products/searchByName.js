const { PRODUCTS } = require('../../strings');
const { searchByField } = require('../../../model')(PRODUCTS);

module.exports = async (name) => {
  const product = await searchByField({ name });

  if (!product) {
    return null;
  }

  return product;
};
