const { PRODUCTS } = require('../strings');
const { searchByField } = require('../../model')(PRODUCTS);

const { update } = require('../documents/products');
const { ADDITION, SUBTRACTION } = require('../strings');

const QUANTITY_DECIMAL_PLACES = 3;
const RADIX = 10;

module.exports = async ({ soldProducts }, operator) => {
  const products = soldProducts.map(({ name }) => searchByField({ name }));
  const productsStock = await Promise.all(products);

  const result = soldProducts.map((productsSold, index) => {
    const { quantity: saleQuantity } = productsSold;
    const { _id: id, quantity: currentQuantity, ...productRest } = productsStock[index];
    
    let newQuantity = 0;

    if (operator === ADDITION) {
      newQuantity = parseInt(currentQuantity, RADIX) + parseInt(saleQuantity, RADIX);
    } else if (operator === SUBTRACTION) {
      newQuantity = parseInt(currentQuantity, RADIX) - parseInt(saleQuantity, RADIX);
    }
  
    const convertedQuantity = newQuantity.toFixed(QUANTITY_DECIMAL_PLACES);

    const updatedProductData = { id, ...productRest, quantity: convertedQuantity };

    return update(updatedProductData);
  });

  const resultResolve = await Promise.all(result);

  return resultResolve;
};
