const express = require('express');

const users = require('./users');
const login = require('./login');

const root = express.Router({ mergeParams: true });

root.use('/users', users);
root.use('/login', login);

module.exports = root;
