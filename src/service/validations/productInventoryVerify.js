const { PRODUCTS } = require('../strings');
const { searchByField } = require('../../model')(PRODUCTS);

const RADIX = 10;

module.exports = async (saleData) => {
  const products = saleData.map(({ name }) => searchByField({ name }));
  const productsStock = await Promise.all(products);
  
  const verify = saleData.reduce((acc, productSold, index) => {  
    if (!productsStock[index]) {
      acc.notExist = [...acc.notExist, productSold.name];
      return acc;
    }

    const convertedSaleQuantity = parseInt(productSold.quantity, RADIX);
    const convertedCurrentQuantity = parseInt(productsStock[index].quantity, RADIX);

    if (convertedCurrentQuantity < convertedSaleQuantity) {
      acc.noStock = [...acc.noStock, productSold.name];
      return acc;
    }

    acc.products = [...acc.products, { ...productsStock[index], quantity: productSold.quantity }];

    return acc;
  }, { products: [], noStock: [], notExist: [] });

  return verify;
};
