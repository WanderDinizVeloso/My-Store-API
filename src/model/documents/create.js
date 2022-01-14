const connection = require('../connection');

module.exports = async (collection, entity) => {
  const createEntity = (await connection())
    .collection(collection)
    .insertOne(entity);
  
  return createEntity;
};
