const express = require('express');

const {
  wrapper,
  validateEmail,
  validateFirstName,
  validateLastName,
  validateId,
  validatePassword,
  authentication,
  userAuthorization,
  admAuthorization,
} = require('../middlewares');

const {
  create, remove, searchAll, searchById, update,
} = require('../documents/users');

const router = express.Router({ mergeParams: true });

router.get('/',
  wrapper(authentication),
  wrapper(admAuthorization),
  wrapper(searchAll));

router.get('/:id',
  wrapper(authentication),
  wrapper(admAuthorization),
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
  wrapper(userAuthorization),
  wrapper(validateId),
  wrapper(validateEmail),
  wrapper(validateFirstName),
  wrapper(validateLastName),  
  wrapper(validatePassword),
  wrapper(update));

router.delete('/:id',
  wrapper(authentication),
  wrapper(userAuthorization),
  wrapper(validateId),
  wrapper(remove));

module.exports = router;
