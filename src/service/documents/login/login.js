const { compare } = require('bcrypt');

const { USERS } = require('../../strings');
const { searchAll } = require('../../../model')(USERS);

const { getToken } = require('../../auth');
const { admVerify } = require('../../validations');

module.exports = async ({ email, password }) => {
  await admVerify(email, password);

  const users = await searchAll();
  
  const userFound = users.find((user) => user.email === email);
  
  if (!userFound) {
    return null;
  }
  
  const user = await compare(password, userFound.password);
 
  if (!user) {
    return null;
  }

  const { password: pass, ...userWithoutPassword } = userFound;

  const token = getToken(userWithoutPassword);

  return token;
};
