const verifyNumbers = require('./verifyNumbers');

module.exports = (sale) => {
  const { quantity, price } = sale;

  const quantityCheck = verifyNumbers(quantity);
  const priceCheck = verifyNumbers(price);

  if (quantityCheck !== quantity || priceCheck !== price) {
    return null;
  }

  return { quantity, price };
};