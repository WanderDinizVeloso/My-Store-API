const { searchAll } = require('../documents/products');
const { notRegisteredProduct } = require('../functions');

const saleDataVerify = require('./saleDataVerify');

module.exports = async (saleData) => {
  const allProducts = await searchAll() || [];

  const dataVerified = saleDataVerify(saleData, allProducts);

  const unregisteredList = notRegisteredProduct(saleData, dataVerified.products);

  const dataVerifiedWithNotRegisteredList = { ...dataVerified, unregisteredList };

  return dataVerifiedWithNotRegisteredList;
};
