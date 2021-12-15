const { searchById } = require('../../../model');

module.exports = async (id) => {
  const findUser = await searchById(id);

  if (!findUser) {
    return null;
  }

  const { password, ...userWithoutPassword } = findUser;

  const user = userWithoutPassword;

  return { user };
};
