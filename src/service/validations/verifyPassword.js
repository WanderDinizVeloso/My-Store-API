const LENGTH = 8;

const MESSAGE_NO_LENGTH = 'no length';

module.exports = (password) => {
  if (!password || password === '') {
    return null;
  }

  if (password.length < LENGTH) {
    return MESSAGE_NO_LENGTH;
  }

  return password;
};
