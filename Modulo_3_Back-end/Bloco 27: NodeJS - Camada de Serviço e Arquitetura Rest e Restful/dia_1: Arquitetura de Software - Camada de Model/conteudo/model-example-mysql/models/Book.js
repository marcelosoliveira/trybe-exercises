const connection = require('./connection');

const Author = require('./Author');

const convertFields = (booksFields) => ({
    id: booksFields.id,
    title: booksFields.title,
    authorId: booksFields.author_id
});

const getAll = async () => {
    const [books] = await connection.execute(
        'SELECT * FROM model_example.books'
    );

    return books.map(convertFields);
}

const getByAuthorId = async (idAuthor) => {
    const [books] = await connection.query(
        'SELECT * FROM model_example.books WHERE author_id = ?', [idAuthor],
    );

    return books.map(convertFields);
}

const findById = async (id) => {
    const [book] = await connection.query(
        'SELECT * FROM model_example.books WHERE id = ?', [id],
    );

    if (book.length === 0) return null;

    return book.map(convertFields)[0];
}

const isValid = async (title, authorId) => {
    if (!title) return true;
    if (title.length < 3 ||  typeof title !== 'string') return true;
    if (authorId === undefined || typeof authorId !== 'number') return true;
console.log()
    const author = await Author.findById(authorId);

    if (!author) return true;

    return false;
}

const create = async (title, authorId) => {
    await connection.query(
        'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)', [title, authorId]
    );
}

module.exports = { getAll, getByAuthorId, findById, isValid, create };
