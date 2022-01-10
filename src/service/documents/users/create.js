const { hash } = require('bcrypt');

const { USERS, USER } = require('../../strings');
const { create, searchByField } = require('../../../model')(USERS);

const searchById = require('./searchById');

const SALT_ROUNDS = 10;

module.exports = async (user) => {
  const verifiedUser = await searchByField({ email: user.email });

  if (verifiedUser[0]) {
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
