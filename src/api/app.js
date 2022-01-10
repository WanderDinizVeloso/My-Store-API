const express = require('express');
const { json } = require('body-parser');

const root = require('../controller/routers/root');
const { error } = require('../controller/middlewares');

require('dotenv').config();

const app = express();

app.use(json());
app.use(root);
app.use(error);

module.exports = app;
