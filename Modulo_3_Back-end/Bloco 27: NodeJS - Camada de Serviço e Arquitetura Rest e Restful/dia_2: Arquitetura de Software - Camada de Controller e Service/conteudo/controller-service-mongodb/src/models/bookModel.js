const connection = require('../../config/connection');
const { ObjectId } = require('mongodb');

const getAll = async () =>
    connection()
        .then((db) => db.collection('books').find().toArray())
        .then((books) =>
        books.map(({ _id, title, author_id }) => ({
            id: _id,
            title,
            authorId: author_id,
        })));

const findById = async (id) => 
    connection().then((db) => db.collection('books').findOne(ObjectId(id)));

const getByAuthorId = async (id) =>
    connection().then((db) => db.collection('books').find({ author_id: id }).toArray());

const create = async (title, authorId) =>
connection()
    .then((db) =>
    db.collection('books').insertOne({ title, author_id: authorId })
    ).then((result) => result);

module.exports = {
    getAll,
    findById,
    create,
    getByAuthorId,
};
