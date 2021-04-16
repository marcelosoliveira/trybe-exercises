const express = require('express');
const authorRouter = require('./src/routes/authorRouter');
const bookRouter = require('./src/routes/bookRouter');
const middleware = require('./src/services/middleware');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use(authorRouter);
app.use(bookRouter);

app.use(middleware.errorMiddleware);

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
