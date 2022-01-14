const { ERRORS } = require('../../strings');
const { searchAll } = require('../../../model')(ERRORS);

module.exports = async () => {
  const errors = await searchAll();

  if (!errors.length) {
    return null;
  }

  return errors;
};
