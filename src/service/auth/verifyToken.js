const { verify } = require('jsonwebtoken');

const { SECRET } = process.env;

module.exports = (token) => {
  const result = verify(token, SECRET, (err, decoded) => {
    if (err) return null;

    return decoded.data;
  });

  return result;
};
