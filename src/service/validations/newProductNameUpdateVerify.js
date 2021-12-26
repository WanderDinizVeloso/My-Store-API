const { findProductName } = require('../functions');

module.exports = async (dataProduct, product) => {
  if (product.name !== dataProduct.name) {
    const verifiedName = await findProductName(dataProduct);

    return verifiedName;
  }

  return null;
};
