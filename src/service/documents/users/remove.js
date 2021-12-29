const { USERS } = require('../../strings');
const { remove } = require('../../../model')(USERS);

const searchById = require('./searchById');

module.exports = async (id) => {
  const user = await searchById(id);

  if (!user) {
    return null;
  }

  const { deletedCount } = await remove(id);

  const deleted = { deletedCount, user };

  return deleted;
};
