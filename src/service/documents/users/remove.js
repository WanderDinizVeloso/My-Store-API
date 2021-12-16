const { remove } = require('../../../model')('users');

const searchByid = require('./searchById');
const { notAuthorization } = require('../../utils/messages');

const ROLE_ADM = 'adm';

module.exports = async ({ id, email, role }) => {
  const user = await searchByid(id);

  if (!user) {
    return null;
  }

  if (user.email !== email && role !== ROLE_ADM) {
    return notAuthorization();
  }

  const { deletedCount } = await remove(id);

  const deleted = { deletedCount, user };

  return deleted;
};
