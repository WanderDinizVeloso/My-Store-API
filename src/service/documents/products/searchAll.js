const { searchAll } = require('../../../model')('products');

module.exports = async () => {
  const products = await searchAll();

  if (!products.length) {
    return null;
  }

  return products;
};
