const express = require('express');

const {
  wrapper,
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
  wrapper(searchById));

router.post('/',
  wrapper(create));

router.put('/:id',
  wrapper(update));

router.delete('/:id',
  wrapper(remove));

module.exports = router;
