module.exports = async (collection, connection, entity) => {
  const createEntity = (await connection())
    .collection(collection)
    .insertOne(entity);
  
  return createEntity;
};
