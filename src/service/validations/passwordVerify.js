const fieldVerify = require('./fieldVerify');
const charactersVerify = require('./charactersVerify');

module.exports = (password, LENGTH) => {
  const verifiedPassword = fieldVerify(password, LENGTH);
  const verifiedPasswordCharacters = charactersVerify(password);

  if (!verifiedPassword) {
    return null;
  }

  if (verifiedPassword === password) {
    return verifiedPasswordCharacters;
  }

  return verifiedPassword;
};
