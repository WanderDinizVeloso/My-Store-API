const { searchById } = require('../../../model')('products');

module.exports = async (id) => {
  const product = await searchById(id);

  if (!product) {
    return null;
  }

  return product;
};
