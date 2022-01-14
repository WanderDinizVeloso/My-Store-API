const connection = require('../connection');

module.exports = async (collection) => {
  const entities = (await connection())
    .collection(collection)
    .find()
    .toArray();

  return entities;
};
