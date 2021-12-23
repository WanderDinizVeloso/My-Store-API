const { ERROR } = require('../../utils/strings');
const { create } = require('../../../model')(ERROR);

module.exports = async (data) => {
  const date = new Date();

  const dataWithDate = { ...data, date };

  await create(dataWithDate);
};
