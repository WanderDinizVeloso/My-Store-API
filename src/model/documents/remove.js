const { ObjectId } = require('mongodb');

module.exports = async (collection, connection, id) => {
  const removed = (await connection())
    .collection(collection)
    .deleteOne({ _id: ObjectId(id) });

  return removed;
};
