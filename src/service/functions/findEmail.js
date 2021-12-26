const { searchAll } = require('../documents/users');

module.exports = async (user) => {  
  const allUsers = await searchAll() || [];  
  
  const userList = allUsers.find(({ email }) => email === user.email);

  return userList;
};
