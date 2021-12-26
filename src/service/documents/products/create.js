const { PRODUCTS } = require('../../utils/strings');
const { create } = require('../../../model')(PRODUCTS);

const searchAll = require('./searchAll');
const searchById = require('./searchById');

module.exports = async (product) => {
  const products = await searchAll() || [];

  const verifiedProduct = products.find(({ name }) => name === product.name);

  if (verifiedProduct) {
    return null;
  }

  const { insertedId } = await create(product);

  const created = await searchById(insertedId);

  return created;
};
