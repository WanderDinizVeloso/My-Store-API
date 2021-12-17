const express = require('express');

const {
  wrapper,
  validateId,
  validateProductCategory,
  validateProductName,
  validateProductPrice,
  validateProductQuantity,
  validateProductUnity,
} = require('../middlewares');

const {
  create,
  remove,
  searchAll,
  searchById,
  update,
} = require('../documents/products');

const router = express.Router({ mergeParams: true });

router.get('/',
  wrapper(searchAll));

router.get('/:id',
  wrapper(validateId),
  wrapper(searchById));

router.post('/',
  wrapper(validateProductName),
  wrapper(validateProductCategory),
  wrapper(validateProductUnity),
  wrapper(validateProductQuantity),
  wrapper(validateProductPrice),
  wrapper(create));

router.put('/:id',
  wrapper(validateId),
  wrapper(validateProductName),
  wrapper(validateProductCategory),
  wrapper(validateProductUnity),
  wrapper(validateProductQuantity),
  wrapper(validateProductPrice),
  wrapper(update));

router.delete('/:id',
  wrapper(validateId),
  wrapper(remove));

module.exports = router;
