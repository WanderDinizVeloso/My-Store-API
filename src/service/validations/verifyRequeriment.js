const { NO_LENGTH, NOT_A_STRING } = require('../utils/strings');

module.exports = (param, length) => {
  if (!param || param === '') {
    return null;
  }

  if (typeof param !== 'string') {
    return NOT_A_STRING;
  }

  if (param.length < length) {
    return NO_LENGTH;
  }

  return param;
};
