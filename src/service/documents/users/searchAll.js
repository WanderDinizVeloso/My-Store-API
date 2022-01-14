const { USERS } = require('../../strings');
const { searchAll } = require('../../../model')(USERS);

module.exports = async () => {
  const allUsers = await searchAll();

  if (!allUsers.length) {
    return null;
  }

  const users = allUsers
    .map(({ password, ...userWithoutPassword }) => userWithoutPassword);
  
  return users;
};
