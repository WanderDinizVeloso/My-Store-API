const express = require('express');

const {
  wrapper,
  validateSale,
  validateId,
  authentication,
  admAuthorization,
} = require('../middlewares');

const {
  create, remove, searchAll, searchById, update,
} = require('../documents/sales');

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
    validateSale,
    create,
  ],
));

router.put('/:id', wrapper(
  [
    authentication,
    admAuthorization,
    validateId,
    validateSale,
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
