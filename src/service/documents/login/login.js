const { compare } = require('bcrypt');

const { searchAll } = require('../../../model')('users');

const { getToken } = require('../../auth');
const { invalid } = require('../../utils/messages');

const EMAIL_OR_PASSWORD = 'email or password';

module.exports = async ({ email, password }) => {
  const allUsers = await searchAll();

  if (!allUsers.length) {
    return null;
  }

  const searchUser = allUsers.find((user) => user.email === email);

  const matchPassword = await compare(password, searchUser.password);

  if (!searchUser.length || !matchPassword) {
    return invalid(EMAIL_OR_PASSWORD);
  }

  const { password: pass, ...userWithoutPassword } = searchUser;

  const token = getToken(userWithoutPassword);

  return token;
};