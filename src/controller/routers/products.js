const express = require('express');

const {
  wrapper,
  validateId,
  validateProductCategory,
  validateProductName,
  validateProductPrice,
  validateProductQuantity,
  validateProductUnity,
  authentication,
  admAuthorization,
} = require('../middlewares');

const {
  create, remove, searchAll, searchById, update,
} = require('../documents/products');

const router = express.Router({ mergeParams: true });

router.get('/',
  wrapper(authentication),
  wrapper(searchAll));

router.get('/:id',
  wrapper(authentication),
  wrapper(validateId),
  wrapper(searchById));

router.post('/',
  wrapper(authentication),
  wrapper(admAuthorization),
  wrapper(validateProductName),
  wrapper(validateProductCategory),
  wrapper(validateProductUnity),
  wrapper(validateProductQuantity),
  wrapper(validateProductPrice),
  wrapper(create));

router.put('/:id',
  wrapper(authentication),
  wrapper(admAuthorization),
  wrapper(validateId),
  wrapper(validateProductName),
  wrapper(validateProductCategory),
  wrapper(validateProductUnity),
  wrapper(validateProductQuantity),
  wrapper(validateProductPrice),
  wrapper(update));

router.delete('/:id',
  wrapper(authentication),
  wrapper(admAuthorization),
  wrapper(validateId),
  wrapper(remove));

module.exports = router;
