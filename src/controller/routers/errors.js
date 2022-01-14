const express = require('express');

const {
  wrapper, authentication, admAuthorization,
} = require('../middlewares');

const { searchAll } = require('../documents/errors');

const router = express.Router({ mergeParams: true });

router.get('/', wrapper(
  [
    authentication,
    admAuthorization,
    searchAll,
  ],
));
  
module.exports = router;
