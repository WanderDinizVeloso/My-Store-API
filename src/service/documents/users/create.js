const { hash } = require('bcrypt');

const { create } = require('../../../model')('users');

const searchById = require('./searchById');
const searchAll = require('./searchAll');

const SALT_ROUNDS = 10;
const USER = 'user';

module.exports = async (user) => {
  const allUsers = await searchAll() || [];

  const verifyUser = allUsers.find(({ email }) => email === user.email);

  if (verifyUser) {
    return null;
  }

  const { password, ...userWithoutPassword } = user;

  const hashedPassword = await hash(password, SALT_ROUNDS);

  const userWithHashedPasswordAndRole = {
    ...userWithoutPassword,
    password: hashedPassword,
    role: USER,
  };

  const { insertedId } = await create(userWithHashedPasswordAndRole);

  const created = await searchById(insertedId);

  return created;
};
