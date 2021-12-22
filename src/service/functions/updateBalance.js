const { update, searchById } = require('../documents/products');
const { ADDITION, SUBTRACTION } = require('../utils/strings');

const QUANTITY_DECIMAL_PLACES = 3;
const RADIX = 10;

module.exports = async (productList, operator) => productList.soldProducts
  .forEach((product) => {
    const result = async () => {        
      const { _id: id, quantity: saleQuantity } = product;
  
      const dataProduct = await searchById(id);
      
      const { _id, quantity: currentQuantity, ...productWithoutIdAndQuantity } = dataProduct;

      let newQuantity = 0;

      if (operator === ADDITION) {
        newQuantity = parseInt(currentQuantity, 10) + parseInt(saleQuantity, RADIX);
      } else if (operator === SUBTRACTION) {
        newQuantity = parseInt(currentQuantity, 10) - parseInt(saleQuantity, RADIX);
      }

      const quantityConvert = newQuantity.toFixed(QUANTITY_DECIMAL_PLACES);
  
      const productDataUpdated = {
        id, ...productWithoutIdAndQuantity, quantity: quantityConvert,
      };
      
      await update(productDataUpdated);
    };

    result();
  });
