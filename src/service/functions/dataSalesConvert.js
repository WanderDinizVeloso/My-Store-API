const QUANTITY_DECIMAL_PLACES = 3;
const PRICE_DECIMAL_PLACES = 2;

module.exports = (sale) => {
  const { unity, quantity, price } = sale;

  const upperCase = unity.toUpperCase();
  const quantityConvert = quantity.toFixed(QUANTITY_DECIMAL_PLACES);
  const priceConvert = price.toFixed(PRICE_DECIMAL_PLACES);

  const saleModified = {
    ...sale,
    unity: upperCase,
    quantity: quantityConvert,
    price: priceConvert,
  };

  return saleModified;
};