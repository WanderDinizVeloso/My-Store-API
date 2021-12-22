const { sign } = require('jsonwebtoken');

const { SECRET, EXPIRES_IN, ALGORITHM } = process.env;

const JWT_CONFIG = {
  expiresIn: EXPIRES_IN,
  algorithm: ALGORITHM,
};

module.exports = (data) => sign(
  { data },
  SECRET,
  JWT_CONFIG,
);
