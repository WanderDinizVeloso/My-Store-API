const { create } = require('../../../model')('users');

const searchById = require('./searchById');
const searchAll = require('./searchAll');

module.exports = async (user) => {
  const allUsers = await searchAll() || [];

  const verifyUser = allUsers.find(({ email }) => email === user.email);

  if (verifyUser) {
    return null;
  }

  const { insertedId } = await create(user);

  const created = await searchById(insertedId);

  return created;
};
