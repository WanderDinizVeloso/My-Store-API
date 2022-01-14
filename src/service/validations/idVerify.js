const { NO_LENGTH, IS_NOT_A_STRING } = require('../strings');

module.exports = (param, length) => {
  if (!param) {
    return null;
  }

  if (typeof param !== 'string') {
    return IS_NOT_A_STRING;
  }

  if (param.length !== length) {
    return NO_LENGTH;
  }

  return param;
};
