const { ERROR } = require('../../strings');
const { create } = require('../../../model')(ERROR);

module.exports = async (error) => {
  const date = new Date();

  const errorWithDate = { ...error, date };

  await create(errorWithDate);
};
