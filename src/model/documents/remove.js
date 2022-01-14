const { ObjectId } = require('mongodb');

const connection = require('../connection');

module.exports = async (collection, id) => {
  const removed = (await connection())
    .collection(collection)
    .deleteOne({ _id: ObjectId(id) });

  return removed;
};
