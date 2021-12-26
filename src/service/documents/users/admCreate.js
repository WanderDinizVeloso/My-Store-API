const { hash } = require('bcrypt');

const { USERS, ROLE_ADM } = require('../../utils/strings');
const { create } = require('../../../model')(USERS);

const searchById = require('./searchById');
const searchAll = require('./searchAll');

const SALT_ROUNDS = 10;

module.exports = async (user) => {
  const allUsers = await searchAll() || [];

  const verifiedUser = allUsers.find(({ email }) => email === user.email);

  if (verifiedUser) {
    return null;
  }

  const { password, ...userWithoutPassword } = user;

  const hashedPassword = await hash(password, SALT_ROUNDS);

  const userWithHashedPasswordAndRole = {
    ...userWithoutPassword,
    password: hashedPassword,
    role: ROLE_ADM,
  };

  const { insertedId } = await create(userWithHashedPasswordAndRole);

  const created = await searchById(insertedId);

  return created;
};
