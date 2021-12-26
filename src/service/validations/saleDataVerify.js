const RADIX = 10;

module.exports = (saleData, allProducts) => saleData.reduce((acc, sale) => {
  const { name, quantity } = sale;

  allProducts.forEach((product) => {
    const convertedQuantity = parseInt(quantity, RADIX);
    const convertedSaleQuantity = parseInt(product.quantity, RADIX);

    if (product.name === name && convertedSaleQuantity < convertedQuantity) {
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