const saleNumbersVerify = require('./saleNumbersVerify');
const saleStringsVerify = require('./saleStringsVerify');

const { saleDataConvert } = require('../functions');

module.exports = (saleData) => saleData.reduce((acc, sale) => {
  const verifiedStrings = saleStringsVerify(sale);
  const verifiedNumbers = saleNumbersVerify(sale);

  if (!verifiedStrings || !verifiedNumbers) {
    acc.invalid = true;
    return acc;
  }

  const convertedSaleData = saleDataConvert(sale);

  acc.products = [
    ...acc.products,
    convertedSaleData,
  ];
  
  return acc;
}, { invalid: false, products: [] });
