const MESSAGE_NO_LENGTH = 'no length';

module.exports = (param, initialNumber, finalNumber) => {
  if (!param || param === '') {
    return null;
  }

  if (param.length > finalNumber && param.length < initialNumber) {
    return MESSAGE_NO_LENGTH;
  }

  return param;
};
