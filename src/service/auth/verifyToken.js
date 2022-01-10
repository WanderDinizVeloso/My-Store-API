const { verify } = require('jsonwebtoken');

const { SECRET } = process.env;

module.exports = (token) => {
  try {
    const decoded = verify(token, SECRET);

    return decoded.data;
  } catch (err) {
    return null;
  }
};
