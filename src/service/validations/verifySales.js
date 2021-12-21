const verifySalesNumbers = require('./verifySalesNumbers');
const verifySalesStrings = require('./verifySalesStrings');

const { dataSalesConvert } = require('../functions');

module.exports = (saleData) => saleData.reduce((acc, sale) => {
  const strings = verifySalesStrings(sale);
  const numbers = verifySalesNumbers(sale);

  if (!strings || !numbers) {
    acc.error = true;
    return acc;
  }

  const convert = dataSalesConvert(sale);

  acc.products = [
    ...acc.products,
    convert,
  ];
  
  return acc;
}, { error: false, products: [] });