const connection = require('./connection');

const create = (message, nickname, timestamp) => {
  connection().then((db) => db.collection('messages')
    .insertOne({ message, nickname, timestamp }));
};

const getAll = () => connection().then((db) => db.collection('messages').find({}).toArray());

const getByNickName = (nickname) => connection().then((db) => db.collection('messages')
  .findOne({ nickname }));

const updateNickName = (nickname, newNickName) =>
  connection().then((db) => db.collection('messages').updateOne(
    { nickname },
    { $inc: { nickname: newNickName } },
  ));

module.exports = {
  getAll,
  getByNickName,
  updateNickName,
  create,
};
