const { INVALID_PASSWORD } = require('../strings');

module.exports = (password) => {
  const upperCaseRegex = /[A-Z]+/.test(password);
  const numberRegex = /[0-9]+/.test(password);
  const specialCharacterRegex = /[!$#%_]+/.test(password);

  if (!upperCaseRegex || !numberRegex || !specialCharacterRegex) {
    return INVALID_PASSWORD;
  }

  return password;
};
