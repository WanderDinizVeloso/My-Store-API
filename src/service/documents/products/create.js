const { PRODUCTS } = require('../../strings');
const { create, searchByField } = require('../../../model')(PRODUCTS);

const searchById = require('./searchById');

module.exports = async (product) => {
  const verifiedProduct = await searchByField({ name: product.name });

  if (verifiedProduct) {
    return null;
  }

  const { insertedId } = await create(product);

  const created = await searchById(insertedId);

  return created;
};
