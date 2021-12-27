const QUANTITY_DECIMAL_PLACES = 3;
const PRICE_DECIMAL_PLACES = 2;

module.exports = (sale) => {
  const { unity, quantity, price } = sale;

  const upperCaseUnitary = unity.toUpperCase();
  const convertedQuantity = quantity.toFixed(QUANTITY_DECIMAL_PLACES);
  const convertedPrice = price.toFixed(PRICE_DECIMAL_PLACES);

  const modifiedSale = {
    ...sale,
    unity: upperCaseUnitary,
    quantity: convertedQuantity,
    price: convertedPrice,
  };

  return modifiedSale;
};
