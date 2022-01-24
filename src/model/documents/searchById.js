const { ObjectId } = require('mongodb');

module.exports = async (collection, connection, id) => {
  const entity = (await connection())
    .collection(collection)
    .findOne(ObjectId(id));

  return entity;
};
