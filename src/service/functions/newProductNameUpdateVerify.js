const findProductName = require('./findProductName');

module.exports = async (dataProduct, product) => {
  if (product.name !== dataProduct.name) {
    const newProductNameVerify = await findProductName(dataProduct);

    return newProductNameVerify;
  }

  return null;
};
