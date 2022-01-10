const create = require('./documents/create');
const remove = require('./documents/remove');
const searchAll = require('./documents/searchAll');
const searchById = require('./documents/searchById');
const searchByField = require('./documents/searchByField');
const update = require('./documents/update');

module.exports = (collection) => ({
  create: async (doc) => create(collection, doc),
  remove: async (id) => remove(collection, id),
  searchAll: async () => searchAll(collection),
  searchById: async (id) => searchById(collection, id),
  searchByField: async (field) => searchByField(collection, field),
  update: async (doc) => update(collection, doc),
});
