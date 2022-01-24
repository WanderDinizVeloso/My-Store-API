module.exports = async (collection, connection, field) => {
  const entity = (await connection())
    .collection(collection)
    .findOne(field);

  return entity;
};
