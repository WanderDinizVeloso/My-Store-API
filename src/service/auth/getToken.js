const { sign } = require('jsonwebtoken');

const { SECRET } = process.env;

const JWT_CONFIG = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

module.exports = (data) => sign(
  { data },
  SECRET,
  JWT_CONFIG,
);
