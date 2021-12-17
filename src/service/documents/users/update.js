const { hash } = require('bcrypt');

const { USERS } = require('../../utils/strings');
const { update } = require('../../../model')(USERS);

const searchByid = require('./searchById');

const SALT_ROUNDS = 10;

module.exports = async (dataUser) => {
  const { id, password, ...dataUserWithoutIdAndPassword } = dataUser;

  const user = await searchByid(id);

  if (!user) {
    return null;
  }

  const hashedPassword = await hash(password, SALT_ROUNDS);

  const modifiedUser = {
    ...user,
    ...dataUserWithoutIdAndPassword,
    password: hashedPassword,
  };

  const { modifiedCount } = await update(modifiedUser);

  const newUserData = await searchByid(id);

  const updated = { modifiedCount, newUserData };

  return updated;
};