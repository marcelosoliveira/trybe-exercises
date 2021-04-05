const express = require('express');
const filterCommentQuery  =require('./util/filterCommentQuery');

const app = express();

const PORT = 4000;

app.use(express.json());

app.get('/comments', filterCommentQuery);


app.get('*', (req, res) => {
    res.status(404).send({ message: "Page not found" });
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: `Something is wrong! Error: ${ err.message }` });
});

app.listen(PORT, () => {
    console.log(`Running is port ${ PORT }`);
});