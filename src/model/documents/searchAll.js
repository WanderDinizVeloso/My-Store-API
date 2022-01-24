module.exports = async (collection, connection) => {
  const entities = (await connection())
    .collection(collection)
    .find()
    .toArray();

  return entities;
};
