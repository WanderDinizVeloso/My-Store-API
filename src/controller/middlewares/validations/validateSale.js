const { saleVerify, productInventaryVerify } = require('../../../service/validations');

const {
  invalid, insufficientStock, productNotRegistered,
} = require('../../statusAndMessage');

const { SALE } = require('../../../service/utils/strings');

module.exports = async (req, _res, next) => {
  const sale = req.body;

  const verifiedSale = saleVerify(sale);

  if (verifiedSale.error) { 
    return next(invalid(SALE));
  }

  const verifiedProductInventory = await productInventaryVerify(verifiedSale.products);

  if (verifiedProductInventory.error) {
    return next(insufficientStock(verifiedProductInventory.errorList));
  }

  if (verifiedProductInventory.count !== sale.length) { 
    return next(productNotRegistered(verifiedProductInventory.unregisteredList));
  }

  const newBody = verifiedProductInventory.products;

  req.body = newBody;

  return next();
};
