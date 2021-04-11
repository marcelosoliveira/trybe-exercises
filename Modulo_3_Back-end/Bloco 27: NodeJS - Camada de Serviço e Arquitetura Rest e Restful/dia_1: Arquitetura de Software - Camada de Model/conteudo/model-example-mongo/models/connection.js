const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const MONGO_BD_URL = 'mongodb://127.0.0.1:27017';

const connection = () => {
   return MongoClient
   .connect(MONGO_BD_URL, OPTIONS)
   .then((conn) => conn.db('model_example'))
   .catch((err) => {
       console.error(err);
       process.exit();
   });
}

module.exports = connection;
