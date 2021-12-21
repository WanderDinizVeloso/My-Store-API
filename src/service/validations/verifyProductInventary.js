const { searchAll } = require('../documents/products');

const RADIX = 10;

module.exports = async (saleData) => {
  const allproducts = await searchAll() || [];

  const verifySaleData = saleData.reduce((acc, sale) => {
    const { name, quantity } = sale;

    allproducts.forEach((product) => {
      const quantityConvert = parseInt(quantity, RADIX);
      const salesQuantityConvert = parseInt(product.quantity, RADIX);

      if (product.name === name && salesQuantityConvert < quantityConvert) {
        acc.error = true;
        acc.errorList = [...acc.errorList, name];
      }

      if (product.name === name) {
        acc.products = [...acc.products, { ...product, ...sale }];
        acc.count += 1;
      }
    });
    
    return acc;
  }, { error: false, errorList: [], products: [], count: 0 });

  return verifySaleData;
};