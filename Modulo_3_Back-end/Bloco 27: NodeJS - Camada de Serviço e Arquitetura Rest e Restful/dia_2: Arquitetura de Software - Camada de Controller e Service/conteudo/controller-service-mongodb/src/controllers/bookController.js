const Book = require('../services/validations/bookService')

const getAll = async (_req, res) => {
    const books = await Book.getAll();

    res.status(200).json(books);
};

const getByAuthorId = async (req, res) => {
    const { idAuthor } = req.params;
    res.status(200).send(await Book.getByAuthorId(idAuthor));
};

const findById = async (req, res) => {
    const book = await Book.findById(req.params.id);

    if (!book) return res.status(404).send({ message: "Book not found!" });

    res.status(200).send(book);
};

const create = async (req, res) => {
    const { title, author_id } = req.body;

    await Book.create(title, author_id);

    res.status(201).send({ message: "Livro criado com sucesso!"});
};

module.exports = {
    getAll,
    getByAuthorId,
    findById,
    create,
}