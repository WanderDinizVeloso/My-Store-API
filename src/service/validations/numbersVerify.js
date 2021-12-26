const { IS_NOT_A_NUMBER } = require('../utils/strings');

module.exports = (param) => {
  if (!param) {
    return null;
  }

  if (typeof param !== 'number' || param <= 0) {
    return IS_NOT_A_NUMBER;
  }

  return param;
};
