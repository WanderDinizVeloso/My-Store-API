const { update } = require('../../../model')('products');

const searchById = require('./searchById');

module.exports = async (dataProduct) => {
  const { id, ...dataProductWithoutId } = dataProduct;

  const product = await searchById(id);

  if (!product) {
    return null;
  }

  const modifiedProduct = {
    ...product,
    ...dataProductWithoutId,
  };

  const { modifiedCount } = await update(modifiedProduct);

  const newProductData = await searchById(id);

  const updated = { modifiedCount, newProductData };

  return updated;
};
