const { searchAll } = require('../documents/products');

const saleDataVerify = require('./saleDataVerify');
const registeredProductsVerify = require('./registeredProductsVerify');

module.exports = async (saleData) => {
  const allProducts = await searchAll() || [];

  const dataVerified = saleDataVerify(saleData, allProducts);

  const unregisteredList = registeredProductsVerify(saleData, dataVerified.products);

  const dataVerifiedWithNotRegisteredList = { ...dataVerified, unregisteredList };

  return dataVerifiedWithNotRegisteredList;
};
