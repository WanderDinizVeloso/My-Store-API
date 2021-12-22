const searchAll = require('../documents/users/searchAll');

module.exports = async (user) => {  
  const allUsers = await searchAll() || [];  
  
  const verifyUser = allUsers.find(({ email }) => email === user.email);

  return verifyUser;
};