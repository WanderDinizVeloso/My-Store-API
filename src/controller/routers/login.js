const express = require('express');

const {
  wrapper, validateEmail, validatePassword,
} = require('../middlewares');

const { login } = require('../documents/login');

const router = express.Router({ mergeParams: true });

router.post('/',
  wrapper(validateEmail), 
  wrapper(validatePassword),
  wrapper(login));

module.exports = router;