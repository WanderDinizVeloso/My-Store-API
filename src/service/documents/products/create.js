const { PRODUCTS } = require('../../utils/strings');
const { create } = require('../../../model')(PRODUCTS);

const findProductName = require('../../functions/findProductName');
const searchById = require('./searchById');

module.exports = async (product) => {
  const verifiedProduct = await findProductName(product);

  if (verifiedProduct) {
    return null;
  }

  const { insertedId } = await create(product);

  const created = await searchById(insertedId);

  return created;
};
