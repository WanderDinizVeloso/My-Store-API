const { SALES } = require('../../strings');
const { searchAll } = require('../../../model')(SALES);

module.exports = async () => {
  const sales = await searchAll();

  if (!sales.length) {
    return null;
  }

  return sales;
};
