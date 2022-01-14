const { hash } = require('bcrypt');

const { USERS, USER, ROLE_ADM } = require('../../strings');
const { create, searchByField, searchById } = require('../../../model')(USERS);

const SALT_ROUNDS = 10;

module.exports = async (user) => {
  const { EMAIL_ADM, PASSWORD_ADM } = process.env;
  
  let role = USER;

  if (user.email === EMAIL_ADM && user.password === PASSWORD_ADM) {
    role = ROLE_ADM;
  }

  const verifiedUser = await searchByField({ email: user.email });

  if (verifiedUser) {
    return null;
  }

  const { password, ...userWithoutPassword } = user;

  const hashedPassword = await hash(password, SALT_ROUNDS);

  const userWithHashedPasswordAndRole = {
    ...userWithoutPassword, password: hashedPassword, role,
  };

  const { insertedId } = await create(userWithHashedPasswordAndRole);

  const created = await searchById(insertedId);

  return created;
};
