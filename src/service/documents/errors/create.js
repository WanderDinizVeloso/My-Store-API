const { ERRORS } = require('../../strings');
const { create } = require('../../../model')(ERRORS);

module.exports = async (error) => {
  const date = new Date();

  const errorWithDate = { ...error, date };

  await create(errorWithDate);
};
