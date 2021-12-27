const { hash } = require('bcrypt');

const { USERS, ROLE_ADM } = require('../../strings');
const { create } = require('../../../model')(USERS);
const { findEmail } = require('../../functions');

const searchById = require('./searchById');

const SALT_ROUNDS = 10;

module.exports = async (user) => {
  const verifiedUser = await findEmail(user);

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
