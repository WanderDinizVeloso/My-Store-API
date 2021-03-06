const { PRODUCTS, PRODUCT_NAME_EXIST } = require('../../strings');
const { update, searchById } = require('../../../model')(PRODUCTS);
const newProductNameUpdateVerify = require('../../validations/newProductNameUpdateVerify');

module.exports = async (productData) => {
  const { id, ...productDataWithoutId } = productData;

  const product = await searchById(id);

  if (!product) {
    return null;
  }

  const verifiedNewProductName = await newProductNameUpdateVerify(productData, product);

  if (verifiedNewProductName) { return PRODUCT_NAME_EXIST; }

  const modifiedProduct = {
    ...product,
    ...productDataWithoutId,
  };

  const { modifiedCount } = await update(modifiedProduct);

  const newProductData = await searchById(id);
  
  return { modifiedCount, newProductData };
};
