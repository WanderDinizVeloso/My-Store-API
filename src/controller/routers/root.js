const express = require('express');

const users = require('./users');
const login = require('./login');
const products = require('./products');
const sales = require('./sales');

const root = express.Router({ mergeParams: true });

root.use('/users', users);
root.use('/login', login);
root.use('/products', products);
root.use('/sales', sales);

module.exports = root;
