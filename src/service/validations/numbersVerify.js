const { NOT_A_NUMBER } = require('../utils/strings');

module.exports = (param) => {
  if (!param) {
    return null;
  }

  if (typeof param !== 'number') {
    return NOT_A_NUMBER;
  }

  return param;
};
