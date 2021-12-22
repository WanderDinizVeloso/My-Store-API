const { hash } = require('bcrypt');

const { USERS, EMAIL_EXISTS } = require('../../utils/strings');
const { update } = require('../../../model')(USERS);
const { newEmailUpdateVerify } = require('../../functions');

const searchByid = require('./searchById');

const SALT_ROUNDS = 10;

module.exports = async (dataUser) => {
  const { id, password, ...dataUserWithoutIdAndPassword } = dataUser;

  const user = await searchByid(id);

  if (!user) { return null; }

  const newEmailVerify = await newEmailUpdateVerify(dataUser, user);

  if (newEmailVerify) { return EMAIL_EXISTS; }

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