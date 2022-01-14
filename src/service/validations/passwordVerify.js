const { INVALID_PASSWORD } = require('../strings');

const stringsVerify = require('./stringsVerify');

module.exports = (password, LENGTH) => {
  const verifiedPassword = stringsVerify(password, LENGTH);
  
  if (!verifiedPassword) {
    return null;
  }

  const upperCaseRegex = /[A-Z]+/.test(password);
  const numberRegex = /[0-9]+/.test(password);
  const specialCharacterRegex = /[!$#%_]+/.test(password);

  if (!upperCaseRegex || !numberRegex || !specialCharacterRegex) {
    return INVALID_PASSWORD;
  }

  return verifiedPassword;
};
