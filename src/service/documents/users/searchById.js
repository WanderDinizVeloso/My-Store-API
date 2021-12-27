const { USERS } = require('../../strings');
const { searchById } = require('../../../model')(USERS);

module.exports = async (id) => {
  const user = await searchById(id);

  if (!user) {
    return null;
  }

  const { password, ...userWithoutPassword } = user;

  return userWithoutPassword;
};
