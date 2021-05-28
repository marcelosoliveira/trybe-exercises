const express = require('express');
const bodyParser = require('body-parser');
const status = require('http-status-codes');
const jokeRouter = require('./routes/jokeRouter');
const categoryRouter = require('./routes/categoryRouter');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// No EJS não funciona o app.use(express.json()); para aceitar post no req.body
// Só aceita com app.use(bodyParser.urlencoded({ extended: true })); para post de formulários.
// app.use(express.json());

app.set('view engine', 'ejs');

app.set('views', './views');

app.use('/joker', jokeRouter);
app.use('/categories', categoryRouter);
app.use('/', (_req, res) => res.redirect('categories'));

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});

app.use((err, _req, res, _next) => {
  res.status(status.INTERNAL_SERVER_ERROR)
    .json({ message: `Something is wrong! Error: ${err.message}` });
});
