const { ERROR } = require('../../strings');
const { searchAll } = require('../../../model')(ERROR);

module.exports = async () => {
  const errors = await searchAll();

  if (!errors.length) {
    return null;
  }

  return errors;
};
