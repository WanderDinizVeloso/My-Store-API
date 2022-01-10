const { PRODUCTS } = require('../strings');
const { searchByField } = require('../../model')(PRODUCTS);

module.exports = async (productData, product) => {
  if (product.name !== productData.name) {
    const verifiedName = await searchByField({ name: productData.name });

    return verifiedName[0];
  }

  return null;
};
