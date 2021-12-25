const searchAll = require('../documents/products/searchAll');

module.exports = async (product) => {  
  const allProducts = await searchAll() || [];  
  
  const verifyProduct = allProducts.find(({ name }) => name === product.name);

  return verifyProduct;
};
