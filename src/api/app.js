const express = require('express');
const { json } = require('body-parser');

const root = require('../controller/routers/root');

const app = express();

app.use(json());

app.use(root);

module.exports = app;
