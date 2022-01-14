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

  const characterArray = [upperCaseRegex, numberRegex, specialCharacterRegex];

  const characterNotValid = characterArray.some((character) => !character);

  if (verifiedPassword === password && characterNotValid) {
    return INVALID_PASSWORD;
  }

  return verifiedPassword;
};
