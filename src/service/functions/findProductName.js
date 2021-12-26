const searchAll = require('../documents/products/searchAll');

module.exports = async (product) => {  
  const allProducts = await searchAll() || [];  
  
  const productList = allProducts.find(({ name }) => name === product.name);

  return productList;
};
