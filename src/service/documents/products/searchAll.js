const { PRODUCTS } = require('../../strings');
const { searchAll } = require('../../../model')(PRODUCTS);

module.exports = async () => {
  const products = await searchAll();

  if (!products.length) {
    return null;
  }

  return products;
};
