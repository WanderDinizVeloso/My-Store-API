const { hash } = require('bcrypt');

const { create } = require('../../../model')('users');

const searchById = require('./searchById');
const searchAll = require('./searchAll');

const SALT_ROUNDS = 10;

module.exports = async (user) => {
  const allUsers = await searchAll() || [];

  const verifyUser = allUsers.find(({ email }) => email === user.email);

  if (verifyUser) {
    return null;
  }

  const { password, ...userWithoutPassword } = user;

  const hashedPassword = await hash(password, SALT_ROUNDS);

  const userWithHashedPassword = { ...userWithoutPassword, password: hashedPassword };

  const { insertedId } = await create(userWithHashedPassword);

  const created = await searchById(insertedId);

  return created;
};
