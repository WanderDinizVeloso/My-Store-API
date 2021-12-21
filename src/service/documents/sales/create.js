const { SALES } = require('../../utils/strings');
const { create } = require('../../../model')(SALES);

const searchById = require('./searchById');
const salesWithTotalAndAmount = require('../../utils/salesWithTotalAndAmount');

module.exports = async (sales) => {
  const result = salesWithTotalAndAmount(sales);

  const { insertedId } = await create(result);

  const created = await searchById(insertedId);

  return created;
};