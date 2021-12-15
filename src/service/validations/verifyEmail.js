const MESSAGE_INVALID_EMAIL = 'invalid email';

module.exports = (email) => {
  const emailVerificationRegex = /(\w+[@]\w+\.[a-z]{3,3}(\.[a-z]{2,2})?)$/.test(email);

  if (!email || email === '') {
    return null;
  }

  if (!emailVerificationRegex) {
    return MESSAGE_INVALID_EMAIL;
  }
};

// regex criado através do site regexr.com
// link do regex de minha autoria: https://regexr.com/6bktt