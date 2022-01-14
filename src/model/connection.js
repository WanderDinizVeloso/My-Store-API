const { MongoClient } = require('mongodb');

const { URL } = process.env;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const DB_NAME = 'my-store';

let connection = null;

module.exports = async () => {
  if (!connection) {
    connection = (await MongoClient.connect(
      URL,
      OPTIONS,
    )).db(DB_NAME);
  }

  return connection;
};
