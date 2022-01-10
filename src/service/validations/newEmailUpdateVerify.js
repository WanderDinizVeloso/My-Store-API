const { USERS } = require('../strings');
const { searchByField } = require('../../model')(USERS);

module.exports = async (userData, user) => {
  if (user.email !== userData.email) {
    const verifiedEmail = await searchByField({ email: userData.email });

    return verifiedEmail[0];
  }

  return null;
};
