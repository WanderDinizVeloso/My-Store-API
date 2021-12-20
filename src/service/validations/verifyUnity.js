const { NO_LENGTH, NOT_A_STRING } = require('../utils/strings');

module.exports = (param, initialNumber, finalNumber) => {
  if (!param) {
    return null;
  }

  if (typeof param !== 'string') {
    return NOT_A_STRING;
  }

  if (param.length > finalNumber || param.length < initialNumber) {
    return NO_LENGTH;
  }

  return param;
};
