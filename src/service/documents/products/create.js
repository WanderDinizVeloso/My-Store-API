const { create } = require('../../../model')('products');

const searchAll = require('./searchAll');
const searchById = require('./searchById');

module.exports = async (product) => {
  const products = await searchAll();

  const verifyProduct = products.find(({ name }) => name === product.name);

  if (verifyProduct) {
    return null;
  }

  const { insertedId } = await create(product);

  const created = await searchById(insertedId);

  return created;
};
