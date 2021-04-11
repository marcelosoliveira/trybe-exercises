const connection = require('./connection');

const Author = require('./Author');
const { ObjectId } = require('mongodb');

const getNewBooks = (booksId) => {
    const { id, title, authorId } = booksId;

    return {
        id,
        title,
        authorId,
    }
}

const convertFields = (booksFields) => ({
    id: booksFields.id,
    title: booksFields.title,
    authorId: booksFields.author_id
});

const getAll = async () => {
    return connection()
    .then((db) => db.collection('books').find().toArray())
    .then((books) => books.map(({ _id, title, author_id }) => {
        return getNewBooks({
            id: _id,
            title,
            authorId: author_id,
        });
    }));
}

const getByAuthorId = async (idAuthor) => {
    const bookData = await connection()
        .then((db) => db.collection('books')
        .find({ author_id: Number(idAuthor) }).toArray())
        .then((books) => books.map(({ _id, title, author_id }) => {
            return getNewBooks({ id: _id, title, authorId: author_id });
        }));

    if (bookData.length === 0) return { message: "Id not found!"};

    return bookData;    
}

const findById = async (id) => {
    return connection()
    .then((db) => db.collection('books').findOne(new ObjectId(id)));
}

const isValid = async (title, authorId) => {
    if (!title) return true;
    if (title.length < 3 ||  typeof title !== 'string') return true;
    if (authorId === undefined || typeof authorId !== 'number') return true;
console.log()
    const author = await Author.findById(authorId);

    //if (!author) return true;

    return false;
}

const create = async (title, authorId) => {
    connection()
    .then((db) => db.collection('books').insertOne({ title, author_id: authorId }))
    .then((result) => getNewBooks({ id: result.insertedId, title, authorId }));
}

module.exports = { getAll, getByAuthorId, findById, isValid, create };
