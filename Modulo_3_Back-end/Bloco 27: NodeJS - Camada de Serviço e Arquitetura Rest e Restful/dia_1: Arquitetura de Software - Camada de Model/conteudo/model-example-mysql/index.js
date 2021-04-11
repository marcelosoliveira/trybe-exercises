const express = require('express');

const Author = require('./models/Author');

const Book = require('./models/Book');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get('/authors', async (_req, res) => {
    const authors = await Author.getAll();

    res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
    const author = await Author.findById(req.params.id);

    if (author.length === 0) return res.status(404).send({ message: "Author not found!"});

    res.status(200).send(author);
});

app.get('/books', async (_req, res) => {
    const books = await Book.getAll();

    res.status(200).json(books);
});

app.get('/books/author/:idAuthor', async (req, res) => {
    const { idAuthor } = req.params;
    res.status(200).send(await Book.getByAuthorId(idAuthor));
});

app.get('/books/:id', async (req, res) => {
    const book = await Book.findById(req.params.id);

    if (!book) return res.status(404).send({ message: "Book not found!" });

    res.status(200).send(book);
});

app.post('/authors', async (req, res) => {
    const { first_name, middle_name, last_name } = req.body;

    if (!Author.isValid(first_name, middle_name, last_name)) {
        return res.status(400).json({ message: 'Dados inválidos' });
    }

    await Author.create(first_name, middle_name, last_name);

    res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.post('/books', async (req, res) => {
    const { title, author_id } = req.body;

    if (await Book.isValid(title, author_id)) return res.status(400).send({ message: "Dados inválidos"});

    await Book.create(title, author_id);

    res.status(201).send({ message: "Livro criado com sucesso!"});
});

app.use((err, req, res, next) => {
    res.status(500).send({ error: `Something id wrong! Error: ${ err.message }`});
});

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
