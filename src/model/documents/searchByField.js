const connection = require('../connection');

module.exports = async (collection, field) => {
  const entity = (await connection())
    .collection(collection)
    .find(field)
    .toArray();

  return entity;
};
