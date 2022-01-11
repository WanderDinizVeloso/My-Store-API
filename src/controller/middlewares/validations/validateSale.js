const { saleFieldVerify, productInventoryVerify } = require('../../../service/validations');

const {
  invalid, insufficientStock, productNotRegistered,
} = require('../../statusAndMessage');

const { SALE } = require('../../../service/strings');

module.exports = async (req, _res, next) => {
  const sale = req.body;

  const saleData = sale.map(({ name, category, unity, quantity, price }) => ({ 
    name, category, unity, quantity, price,
  }));

  const verifiedSale = saleFieldVerify(saleData);

  if (verifiedSale.invalid) { 
    return next(invalid(SALE));
  }

  const verifiedProductInventory = await productInventoryVerify(verifiedSale.products);

  if (verifiedProductInventory.notExist.length !== 0) { 
    return next(productNotRegistered(verifiedProductInventory.notExist));
  }

  if (verifiedProductInventory.noStock.length !== 0) {
    return next(insufficientStock(verifiedProductInventory.noStock));
  }

  req.body = verifiedProductInventory.products;

  return next();
};
