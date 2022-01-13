const { PRODUCTS } = require('../../strings');
const { create } = require('../../../model')(PRODUCTS);

const searchByName = require('./searchByName');
const searchById = require('./searchById');

module.exports = async (product) => {
  const verifiedProduct = await searchByName(product.name);

  if (verifiedProduct) {
    return null;
  }

  const { insertedId } = await create(product);

  const created = await searchById(insertedId);

  return created;
};
