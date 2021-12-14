const { verify } = require('jsonwebtoken');

const { SECRET } = process.env;

module.exports = (token) => {
  const result = verify(token, SECRET);

  if (!result) {
    return null;
  }

  return result;
};
