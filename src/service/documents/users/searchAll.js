const { searchAll } = require('../../../model')('users');

module.exports = async () => {
  const allUsers = await searchAll();

  if (!allUsers.length) {
    return { users: [] };
  }

  const users = allUsers
    .map(({ password, ...userWithoutPassword }) => userWithoutPassword);
  
  return { users };
};
