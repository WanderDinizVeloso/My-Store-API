const saleNumbersVerify = require('./saleNumbersVerify');
const saleStringsVerify = require('./saleStringsVerify');

const { dataSalesConvert } = require('../functions');

module.exports = (saleData) => saleData.reduce((acc, sale) => {
  const verifiedStrings = saleStringsVerify(sale);
  const verifiedNumbers = saleNumbersVerify(sale);

  if (!verifiedStrings || !verifiedNumbers) {
    acc.error = true;
    return acc;
  }

  const convertedSaleData = dataSalesConvert(sale);

  acc.products = [
    ...acc.products,
    convertedSaleData,
  ];
  
  return acc;
}, { error: false, products: [] });