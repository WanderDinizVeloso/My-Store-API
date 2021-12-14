const { searchAll } = require('../../../model')('users');

module.exports = async () => {
  const users = await searchAll();

  return { users };
};
