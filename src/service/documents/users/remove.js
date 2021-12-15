const { remove } = require('../../../model');

const searchByid = require('./searchById');

module.exports = async (id) => {
  const user = await searchByid(id);

  if (!user) {
    return null;
  }

  const { deletedCount } = await remove(id);

  const deleted = { deletedCount, user };

  return deleted;
};
