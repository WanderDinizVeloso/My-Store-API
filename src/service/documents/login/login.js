const { compare } = require('bcrypt');

const { USERS } = require('../../utils/strings');
const { searchAll } = require('../../../model')(USERS);
const { getToken } = require('../../auth');
const { verifyAdm } = require('../../validations');

module.exports = async ({ email, password }) => {
  await verifyAdm(email, password);
  const allUsers = await searchAll();
  
  const searchUser = allUsers.find((user) => user.email === email);
  
  if (!allUsers.length || !searchUser) {
    return null;
  }
  
  const matchPassword = await compare(password, searchUser.password);
 
  if (!matchPassword) {
    return null;
  }

  const { password: pass, ...userWithoutPassword } = searchUser;

  const token = getToken(userWithoutPassword);

  return token;
};