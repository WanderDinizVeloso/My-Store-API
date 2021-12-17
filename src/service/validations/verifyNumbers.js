const MESSAGE_NOT_A_NUMBER = 'not a number';

module.exports = (param) => {
  if (!param) {
    return null;
  }

  if (typeof param !== 'number') {
    return MESSAGE_NOT_A_NUMBER;
  }

  return param;
};
