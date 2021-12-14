const express = require('express');
const { json } = require('body-parser');

const app = express();

app.use(json());

module.exports = app;