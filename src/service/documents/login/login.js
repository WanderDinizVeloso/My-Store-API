const { compare } = require('bcrypt');

const { searchAll } = require('../../../model')('users');

const { getToken } = require('../../auth');

module.exports = async ({ email, password }) => {
  const allUsers = await searchAll();

  const searchUser = allUsers.find((user) => user.email === email);

  const matchPassword = await compare(password, searchUser.password);

  if (!allUsers.length || !searchUser.length || !matchPassword) {
    return null;
  }

  const { password: pass, ...userWithoutPassword } = searchUser;

  const token = getToken(userWithoutPassword);

  return token;
};