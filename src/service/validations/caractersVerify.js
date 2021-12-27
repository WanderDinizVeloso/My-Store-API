const { INVALID_PASSWORD } = require('../strings');

module.exports = (password) => {
  const upperCaseRegex = /[A-Z]+/.test(password);
  const numberRegex = /[0-9]+/.test(password);
  const specialCaracterRegex = /[!$#%_]+/.test(password);

  if (!upperCaseRegex || !numberRegex || !specialCaracterRegex) {
    return INVALID_PASSWORD;
  }

  return password;
};
