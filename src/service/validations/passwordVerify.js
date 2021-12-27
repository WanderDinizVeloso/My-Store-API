const fieldVerify = require('./fieldVerify');
const caractersVerify = require('./caractersVerify');

module.exports = (password, LENGTH) => {
  const verifiedPassword = fieldVerify(password, LENGTH);
  const verifiedPasswordCaracters = caractersVerify(password);

  if (!verifiedPassword) {
    return verifiedPasswordCaracters;
  }

  return verifiedPassword;
};