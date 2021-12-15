const LENGTH = 3;

const MESSAGE_NO_LENGTH = 'no length';

module.exports = (name) => {
  if (!name || name === '') {
    return null;
  }

  if (name.length < LENGTH) {
    return MESSAGE_NO_LENGTH;
  }

  return name;
};