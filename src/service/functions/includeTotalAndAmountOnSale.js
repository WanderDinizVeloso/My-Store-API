const DECIMAL_PLACES = 2;
const RADIX = 10;

module.exports = (sales) => sales
  .reduce((acc, sale) => {
    const convertedPrice = parseInt(sale.price, RADIX);
    const convertedQuantity = parseInt(sale.quantity, RADIX);

    const total = (convertedPrice * convertedQuantity).toFixed(DECIMAL_PLACES);

    const amount = (
      parseInt(acc.amount, RADIX) + parseInt(total, RADIX)
    ).toFixed(DECIMAL_PLACES);

    return {
      ...acc,
      amount,
      soldProducts: [
        ...acc.soldProducts,
        { ...sale, total },
      ],
    };
  }, { amount: 0.00, soldProducts: [] });
