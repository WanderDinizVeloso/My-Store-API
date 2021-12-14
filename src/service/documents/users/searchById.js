const { searchById } = require('../../../model');

module.exports = async (id) => {
  const user = await searchById(id);

  if (!user) {
    return null;
  }

  return { user };
};
