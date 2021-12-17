const express = require('express');

const users = require('./users');
const login = require('./login');
const products = require('./products');

const root = express.Router({ mergeParams: true });

root.use('/users', users);
root.use('/login', login);
root.use('/products', products);

module.exports = root;
