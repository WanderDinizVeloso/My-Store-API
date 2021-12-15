const { create, searchById } = require('../../../model')('users');

module.exports = async (user) => {
  const { insertedId } = await create(user);

  const { password, ...userWithoutPassword } = await searchById(insertedId);

  return userWithoutPassword;
};