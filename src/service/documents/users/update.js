const { update } = require('../../../model')('users');

const searchByid = require('./searchById');

module.exports = async (dataUser) => {
  const { id, ...dataUserWithoutId } = dataUser;

  const user = await searchByid(id);

  if (!user) {
    return null;
  }

  const modifiedUser = {
    ...user,
    ...dataUserWithoutId,
  };

  const { modifiedCount } = await update(modifiedUser);

  const newUserData = await searchByid(id);

  const updated = { modifiedCount, newUserData };

  return updated;
};