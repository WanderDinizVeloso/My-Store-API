const { searchById } = require('../../../model')('users');

module.exports = async (id) => {
  const user = await searchById(id);

  if (!user) {
    return null;
  }

  const { password, ...userWithoutPassword } = user;

  return userWithoutPassword;
};
