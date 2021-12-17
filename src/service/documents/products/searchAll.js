const { PRODUCTS } = require('../../utils/strings');
const { searchAll } = require('../../../model')(PRODUCTS);

module.exports = async () => {
  const products = await searchAll();

  if (!products.length) {
    return null;
  }

  return products;
};
