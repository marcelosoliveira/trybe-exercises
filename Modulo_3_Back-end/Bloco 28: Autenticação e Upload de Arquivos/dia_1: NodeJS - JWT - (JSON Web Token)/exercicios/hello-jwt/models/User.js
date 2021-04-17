const connection = require('./connection');

const create = async (username, password) => {
  await connection()
    .then((db) => db.collection('users').insertOne({ username, password }));
};

const findUser = async (username) =>
  connection().then((db) => db.collection('users').findOne({ username }));

const findAll = async () =>
  connection().then((db) => db.collection('users').find().toArray());

module.exports = {
    create,
    findUser,
    findAll
};
