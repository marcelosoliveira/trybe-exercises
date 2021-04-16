const Book = require('../../models/bookModel');
const Author = require('../../models/authorModel');
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

const isValid = async (title, authorId) => {
    if (!title) return true;
    if (title.length < 3 ||  typeof title !== 'string') return true;
    if (authorId === undefined || typeof authorId !== 'number') return true;
    
    const author = await Author.findById(authorId);

    //if (!author) return true;

    return false;
}

const getAll = async () => {
    const books = await Book.getAll();

    return books.map(getNewBooks);
};

const findById = async (id) => {
    if (!ObjectId.isValid(id)) return { message: "Id is not valid!"};

    const book = await Book.findById(id);

    if (!book) return null;

    const { title, author_id } = book;

    return getNewBooks({ id, title, authorId: author_id });
}

const getByAuthorId = async (id) => {
    //const author = await Author.findById(id)

    //if (!author) return { message: "Author not found!" }

    const authorBook = await Book.getByAuthorId(Number(id));

    if(authorBook < 1) return { message: "Book not found"}

    return authorBook;
}

const create = async (title, authorId) => {
    const bookValid = isValid(title, authorId);

    if(!bookValid) return false;

    const { insertedId } = await Book.create(title, authorId);

    return getNewBooks({
        id: insertedId,
        title,
        authorId,
    });
}

module.exports = {
    getAll,
    findById,
    create,
    getByAuthorId,
};
