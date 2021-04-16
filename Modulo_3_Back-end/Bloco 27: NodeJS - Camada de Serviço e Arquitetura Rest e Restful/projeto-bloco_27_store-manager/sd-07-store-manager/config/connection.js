require('dotenv/config');

const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//const MONGO_DB_URL = !process.env.MONGO_DB_URL || process.env.LOCAL_DB_URL;
//const DB_NAME = process.env.DB_NAME;

const MONGO_DB_URL = 'mongodb://mongodb:27017/StoreManager';
const DB_NAME = 'StoreManager';

const connection = () => {
  return MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => conn.db(DB_NAME))
    .catch((error) => {
      console.error(error.message);
      process.exit();
    });
};

module.exports = connection;
