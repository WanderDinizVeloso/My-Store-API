const { SALES } = require('../../utils/strings');
const { create } = require('../../../model')(SALES);
const { salesWithTotalAndAmount } = require('../../functions');

const searchById = require('./searchById');

module.exports = async (sales) => {
  const result = salesWithTotalAndAmount(sales);

  const { insertedId } = await create(result);

  const created = await searchById(insertedId);

  return created;
};