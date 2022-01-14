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

router.get('/', wrapper(
  [
    authentication,
    admAuthorization,
    searchAll,
  ],
));

router.get('/:id', wrapper(
  [
    authentication,
    admAuthorization,
    validateId,
    searchById,
  ],
));

router.post('/', wrapper(
  [
    validateEmail,
    validateFirstName,
    validateLastName,  
    validatePassword,
    create,
  ],
));

router.put('/:id', wrapper(
  [
    authentication,
    userAuthorization,
    validateId,
    validateEmail,
    validateFirstName,
    validateLastName,  
    validatePassword,
    update,
  ],
));

router.delete('/:id', wrapper(
  [
    authentication,
    userAuthorization,
    validateId,
    remove,
  ],
));

module.exports = router;
