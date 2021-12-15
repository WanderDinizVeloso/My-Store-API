const express = require('express');

const users = require('./users');

const root = express.Router({ mergeParams: true });

root.use('/users', users);

module.exports = root;
