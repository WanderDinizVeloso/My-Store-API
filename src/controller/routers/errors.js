const express = require('express');

const {
  wrapper, authentication, admAuthorization,
} = require('../middlewares');

const { searchAll } = require('../documents/errors');

const router = express.Router({ mergeParams: true });

router.get('/',
  wrapper(authentication),
  wrapper(admAuthorization),
  wrapper(searchAll));
  
module.exports = router;
