const numbersVerify = require('./numbersVerify');

module.exports = (sale) => {
  const { quantity, price } = sale;

  const verifiedQuantity = numbersVerify(quantity);
  const verifiedPrice = numbersVerify(price);

  if (verifiedQuantity !== quantity || verifiedPrice !== price) {
    return null;
  }

  return { quantity, price };
};
