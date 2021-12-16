const MESSAGE_NO_LENGTH = 'no length';

module.exports = (param, length) => {
  if (!param || param === '') {
    return null;
  }

  console.log(param.length, length);

  if (param.length < length) {
    return MESSAGE_NO_LENGTH;
  }

  return param;
};
