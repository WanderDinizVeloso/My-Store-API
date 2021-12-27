const { SALES } = require('../../strings');
const { searchById } = require('../../../model')(SALES);

module.exports = async (id) => {
  const sale = await searchById(id);

  if (!sale) {
    return null;
  }

  return sale;
};
