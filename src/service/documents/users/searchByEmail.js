const { USERS } = require('../../strings');
const { searchByField } = require('../../../model')(USERS);

module.exports = async (email) => {
  const user = await searchByField({ email });

  if (!user) {
    return null;
  }

  const { password, ...userWithoutPassword } = user;

  return userWithoutPassword;
};
