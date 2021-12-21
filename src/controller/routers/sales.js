const express = require('express');

const {
  wrapper,
  validateSale,
  validateId,
} = require('../middlewares');

const {
  create,
  remove,
  searchAll,
  searchById,
  update,
} = require('../documents/sales');

const router = express.Router({ mergeParams: true });

router.get('/',
  wrapper(searchAll));

router.get('/:id',
  wrapper(validateId),
  wrapper(searchById));

router.post('/',
  wrapper(validateSale),
  wrapper(create));

router.put('/:id',
  wrapper(validateId),
  wrapper(validateSale),
  wrapper(update));

router.delete('/:id',
  wrapper(validateId),
  wrapper(remove));

module.exports = router;
