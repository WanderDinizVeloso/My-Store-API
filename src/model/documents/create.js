const connection = require('../connection');

module.exports = async (collection, entity) => {
  const createEntity = (await connection())
    .colletion(collection)
    .insertOne(entity);
  
  return createEntity;
};