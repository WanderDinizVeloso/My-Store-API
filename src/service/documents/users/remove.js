const { USERS } = require('../../strings');
const { remove, searchById } = require('../../../model')(USERS);

module.exports = async (id) => {
  const user = await searchById(id);

  if (!user) {
    return null;
  }

  const { deletedCount } = await remove(id);

  return { deletedCount, user };
};
