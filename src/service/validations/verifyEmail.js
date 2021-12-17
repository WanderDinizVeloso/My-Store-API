const { NOT_A_EMAIL } = require('../utils/strings');

module.exports = (email) => {
  const emailVerificationRegex = /(\w+[@]\w+\.[a-z]{3,3}(\.[a-z]{2,2})?)$/.test(email);

  if (!email || email === '') {
    return null;
  }

  if (!emailVerificationRegex) {
    return NOT_A_EMAIL;
  }

  return email;
};

// regex criado através do site regexr.com
// link do regex de minha autoria: https://regexr.com/6bktt