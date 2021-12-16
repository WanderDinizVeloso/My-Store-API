const express = require('express');

const {
  wrapper,
  validateEmail,
  validateFirstName,
  validateLastName,
  validateId,
  validatePassword,
  authentication,
} = require('../middlewares');

const {
  create,
  remove,
  searchAll,
  searchById,
  update,
} = require('../documents/users');

const router = express.Router({ mergeParams: true });

router.get('/',
  wrapper(authentication),
  wrapper(searchAll));

router.get('/:id',
  wrapper(authentication),
  wrapper(validateId),
  wrapper(searchById));

router.post('/',
  wrapper(validateEmail),
  wrapper(validateFirstName),
  wrapper(validateLastName),  
  wrapper(validatePassword),
  wrapper(create));

router.put('/:id',
  wrapper(authentication),
  wrapper(validateId),
  wrapper(validateEmail),
  wrapper(validateFirstName),
  wrapper(validateLastName),  
  wrapper(validatePassword),
  wrapper(update));

router.delete('/:id',
  wrapper(authentication),
  wrapper(validateId),
  wrapper(remove));

module.exports = router;
