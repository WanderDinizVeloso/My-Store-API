const { hash } = require('bcrypt');

const { USERS, ROLE_ADM } = require('../../strings');
const { create, searchByField, searchById } = require('../../../model')(USERS);

const SALT_ROUNDS = 10;

module.exports = async (user) => {
  const verifiedUser = await searchByField({ email: user.email });

  if (verifiedUser) {
    return null;
  }

  const { password, ...userWithoutPassword } = user;

  const hashedPassword = await hash(password, SALT_ROUNDS);

  const userWithHashedPasswordAndRole = { 
    ...userWithoutPassword, password: hashedPassword, role: ROLE_ADM,
  };

  const { insertedId } = await create(userWithHashedPasswordAndRole);

  const created = await searchById(insertedId);

  return created;
};
