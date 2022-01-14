const express = require('express');

const {
  wrapper, validateEmail, validatePassword,
} = require('../middlewares');

const { login } = require('../documents/login');

const router = express.Router({ mergeParams: true });

router.post('/', wrapper(
  [
    validateEmail,
    validatePassword,
    login,
  ],
));

module.exports = router;
