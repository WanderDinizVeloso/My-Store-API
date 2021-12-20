const { SALES } = require('../../utils/strings');
const { searchById } = require('../../../model')(SALES);

module.exports = async (id) => {
  const sales = await searchById(id);

  if (!sales) {
    return null;
  }

  return sales;
};
