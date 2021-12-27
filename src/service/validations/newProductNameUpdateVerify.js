const findProductName = require('../functions/findProductName');

module.exports = async (productData, product) => {
  if (product.name !== productData.name) {
    const verifiedName = await findProductName(productData);

    return verifiedName;
  }

  return null;
};
