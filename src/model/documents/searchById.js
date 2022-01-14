const { ObjectId } = require('mongodb');

const connection = require('../connection');

module.exports = async (collection, id) => {
  const entity = (await connection())
    .collection(collection)
    .findOne(ObjectId(id));

  return entity;
};
