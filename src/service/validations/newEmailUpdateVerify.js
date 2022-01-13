const searchByEmail = require('../documents/users/searchByEmail');

module.exports = async (userData, user) => {
  if (user.email !== userData.email) {
    const verifiedEmail = await searchByEmail(userData.email);

    return verifiedEmail;
  }

  return null;
};
