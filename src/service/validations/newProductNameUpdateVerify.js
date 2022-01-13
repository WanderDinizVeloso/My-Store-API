const searchByName = require('../documents/products');

module.exports = async (productData, product) => {
  if (product.name !== productData.name) {
    const verifiedName = await searchByName(productData.name);

    return verifiedName;
  }

  return null;
};
