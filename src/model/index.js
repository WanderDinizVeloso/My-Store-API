const create = require('./documents/create');
const remove = require('./documents/remove');
const searchAll = require('./documents/searchAll');
const searchById = require('./documents/searchById');
const searchByField = require('./documents/searchByField');
const update = require('./documents/update');

module.exports = (collection, connection) => ({
  create: async (doc) => create(collection, connection, doc),
  remove: async (id) => remove(collection, connection, id),
  searchAll: async () => searchAll(collection, connection),
  searchById: async (id) => searchById(collection, connection, id),
  searchByField: async (field) => searchByField(collection, connection, field),
  update: async (doc) => update(collection, connection, doc),
});
