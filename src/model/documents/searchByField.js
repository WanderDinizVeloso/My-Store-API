const connection = require('../connection');

module.exports = async (collection, field) => {
  const entity = (await connection())
    .collection(collection)
    .findOne(field);

  return entity;
};
