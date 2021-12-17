const { NO_LENGTH } = require('../utils/strings');

module.exports = (param, length) => {
  if (!param || param === '') {
    return null;
  }

  if (param.length < length) {
    return NO_LENGTH;
  }

  return param;
};
