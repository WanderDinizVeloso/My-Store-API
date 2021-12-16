const MESSAGE_NO_LENGTH = 'no length';

module.exports = (param, length) => {
  if (!param || param === '') {
    return null;
  }

  if (param.length < length) {
    return MESSAGE_NO_LENGTH;
  }

  return param;
};
