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

router.get('/',
  wrapper(authentication),
  wrapper(searchAll));

router.get('/:id',
  wrapper(authentication),
  wrapper(validateId),
  wrapper(searchById));

router.post('/',
  wrapper(authentication),
  wrapper(validateSale),
  wrapper(create));

router.put('/:id',
  wrapper(authentication),
  wrapper(admAuthorization),
  wrapper(validateId),
  wrapper(validateSale),
  wrapper(update));

router.delete('/:id',
  wrapper(authentication),
  wrapper(admAuthorization),
  wrapper(validateId),
  wrapper(remove));

module.exports = router;
