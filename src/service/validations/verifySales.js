const verifyRequeriment = require('./verifyRequeriment');
const verifyNumbers = require('./verifyNumbers');
const verifyUnity = require('./verifyUnity');

const LENGTH = 4;
const INITIAL_LENGTH = 2;
const FINAL_LENGTH = 3;
const DECIMAL_PLACES = 2;

const validationStrings = (sale) => {
  const { name, category, unity } = sale;

  const namecheck = verifyRequeriment(name, LENGTH);
  const categoryCheck = verifyRequeriment(category, LENGTH);
  const unityCheck = verifyUnity(unity, INITIAL_LENGTH, FINAL_LENGTH);

  if (namecheck !== name || categoryCheck !== category || unityCheck !== unity) {
    return null;
  }

  return { name, category, unity };
};

const validationNumbers = (sale) => {
  const { quantity, price } = sale;

  const quantityCheck = verifyNumbers(quantity);
  const priceCheck = verifyNumbers(price);

  if (quantityCheck !== quantity || priceCheck !== price) {
    return null;
  }

  return { quantity, price };
};

const dataConvert = (sale) => {
  const { unity, quantity, price } = sale;

  const upperCase = unity.toUpperCase();
  const quantityConvert = quantity.toFixed(DECIMAL_PLACES);
  const priceConvert = price.toFixed(DECIMAL_PLACES);

  const saleModified = {
    ...sale,
    unity: upperCase,
    quantity: quantityConvert,
    price: priceConvert,
  };

  return saleModified;
};

module.exports = (saleData) => saleData.reduce((acc, sale) => {
  const strings = validationStrings(sale);
  const numbers = validationNumbers(sale);

  if (!strings || !numbers) {
    acc.error = true;
    return acc;
  }

  const convert = dataConvert(sale);

  acc.products = [
    ...acc.products,
    convert,
  ];
  
  return acc;
}, { error: false, products: [] });