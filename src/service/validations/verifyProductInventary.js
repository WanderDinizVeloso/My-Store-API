const { searchAll } = require('../documents/products');
const { notRegisteredProduct } = require('../functions');

const verifySaleData = require('./verifySaleData');

module.exports = async (saleData) => {
  const allproducts = await searchAll() || [];

  const verify = verifySaleData(saleData, allproducts);

  const notRegisteredList = notRegisteredProduct(saleData, verify.products);

  const verifyWithNotRegisteredList = { ...verify, notRegisteredList };

  return verifyWithNotRegisteredList;
};
