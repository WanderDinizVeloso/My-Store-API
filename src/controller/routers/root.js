const express = require('express');

const users = require('./users');
const login = require('./login');
const products = require('./products');
const sales = require('./sales');
const errors = require('./errors');

const root = express.Router({ mergeParams: true });

root.use('/users', users);
root.use('/login', login);
root.use('/products', products);
root.use('/sales', sales);
root.use('/errors', errors);

module.exports = root;
