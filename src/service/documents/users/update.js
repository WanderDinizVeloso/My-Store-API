const { hash } = require('bcrypt');

const { USERS, EMAIL_EXIST } = require('../../strings');
const { update } = require('../../../model')(USERS);

const newEmailUpdateVerify = require('../../validations/newEmailUpdateVerify');
const searchById = require('./searchById');

const SALT_ROUNDS = 10;

module.exports = async (userData) => {
  const { id, password, ...userDataWithoutIdAndPassword } = userData;

  const user = await searchById(id);

  if (!user) { return null; }

  const verifiedNewEmail = await newEmailUpdateVerify(userData, user);

  if (verifiedNewEmail) { return EMAIL_EXIST; }

  const hashedPassword = await hash(password, SALT_ROUNDS);

  const modifiedUser = {
    ...user,
    ...userDataWithoutIdAndPassword,
    password: hashedPassword,
  };

  const { modifiedCount } = await update(modifiedUser);

  const newUserData = await searchById(id);

  return { modifiedCount, newUserData };
};
