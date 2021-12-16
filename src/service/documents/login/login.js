const { compare } = require('bcrypt');

const { searchAll } = require('../../../model')('users');

const { getToken } = require('../../auth');

module.exports = async ({ email, password }) => {
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