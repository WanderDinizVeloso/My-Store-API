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

router.get('/', wrapper(
  [
    authentication,
    searchAll,
  ],
));

router.get('/:id', wrapper(
  [
    authentication,
    validateId,
    searchById,
  ],
));

router.post('/', wrapper(
  [
    authentication,
    admAuthorization,
    validateProductName,
    validateProductCategory,
    validateProductUnity,
    validateProductQuantity,
    validateProductPrice,
    create,
  ],
));

router.put('/:id', wrapper(
  [
    authentication,
    admAuthorization,
    validateId,
    validateProductName,
    validateProductCategory,
    validateProductUnity,
    validateProductQuantity,
    validateProductPrice,
    update,
  ],
));

router.delete('/:id', wrapper(
  [
    authentication,
    admAuthorization,
    validateId,
    remove,
  ],
));

module.exports = router;
