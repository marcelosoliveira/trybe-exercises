const express = require('express');
const bookController = require('./controllers/bookController');

const app = express();

app.use(express.json());

const PORT = 3000;

app.use('/books', bookController);

app.listen(PORT, () => {
    console.log(`Running is port ${ PORT }`);
});

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});
