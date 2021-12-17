const { NO_LENGTH } = require('../utils/strings');

module.exports = (param, initialNumber, finalNumber) => {
  if (!param || param === '') {
    return null;
  }

  if (param.length > finalNumber || param.length < initialNumber) {
    return NO_LENGTH;
  }

  return param;
};
