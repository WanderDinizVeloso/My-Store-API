const { PRODUCTS, PRODUCT_NAME_EXISTS } = require('../../utils/strings');
const { update } = require('../../../model')(PRODUCTS);

const newProductNameUpdateVerify = require('../../functions/newProductNameUpdateVerify');
const searchById = require('./searchById');

module.exports = async (dataProduct) => {
  const { id, ...dataProductWithoutId } = dataProduct;

  const product = await searchById(id);

  if (!product) {
    return null;
  }

  const newProductNameVerify = await newProductNameUpdateVerify(dataProduct, product);

  if (newProductNameVerify) { return PRODUCT_NAME_EXISTS; }

  const modifiedProduct = {
    ...product,
    ...dataProductWithoutId,
  };

  const { modifiedCount } = await update(modifiedProduct);

  const newProductData = await searchById(id);

  const updated = { modifiedCount, newProductData };

  return updated;
};
