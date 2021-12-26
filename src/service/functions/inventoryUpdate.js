const { update, searchById } = require('../documents/products');
const { ADDITION, SUBTRACTION } = require('../utils/strings');

const QUANTITY_DECIMAL_PLACES = 3;
const RADIX = 10;

module.exports = async (productList, operator) => productList.soldProducts
  .forEach((product) => {
    const result = async () => {        
      const { _id: id, quantity: saleQuantity } = product;
  
      const productData = await searchById(id);
      
      const { _id, quantity: currentQuantity, ...productDataWithoutIdAndQuantity } = productData;

      let newQuantity = 0;

      if (operator === ADDITION) {
        newQuantity = parseInt(currentQuantity, RADIX) + parseInt(saleQuantity, RADIX);
      } else if (operator === SUBTRACTION) {
        newQuantity = parseInt(currentQuantity, RADIX) - parseInt(saleQuantity, RADIX);
      }

      const convertedQuantity = newQuantity.toFixed(QUANTITY_DECIMAL_PLACES);
  
      const updatedProductData = {
        id, ...productDataWithoutIdAndQuantity, quantity: convertedQuantity,
      };
      
      await update(updatedProductData);
    };

    result();
  });
