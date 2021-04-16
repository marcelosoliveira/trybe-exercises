const connection = require('../../config/connection');
const { ObjectId } = require('mongodb');

const add = async (name, brand) => {  
    await connection()
    .then((db) => db.collection('products').insertOne({ name, brand }));
};

const getAll = async () => {
   return await connection()
  .then((db) => db.collection('products').find().toArray());
};

const getById = async (id) => {
    return await connection()
    .then((db) => db.collection('products').findOne(ObjectId(id)));
};

const update = async (id, name, brand) => {
    await connection()
    .then((db) => db.collection('products').updateOne({ _id: ObjectId(id) },
    { $set: { name, brand } }));
};

const exclude = async (id) => {
    await connection()
    .then((db) => db.collection('products').deleteOne({ _id: ObjectId(id) }));
};

module.exports = {
  add,
  getAll,
  getById,
  update,
  exclude
};
