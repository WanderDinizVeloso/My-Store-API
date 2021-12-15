const { create } = require('../../../model')('users');

const searchById = require('./searchById');

module.exports = async (user) => {
  const { insertedId } = await create(user);

  const created = await searchById(insertedId);

  return created;
};
