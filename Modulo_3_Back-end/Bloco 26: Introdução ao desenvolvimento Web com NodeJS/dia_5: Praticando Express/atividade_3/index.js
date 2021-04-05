const express = require('express');
const posts = require('./data/posts.json');

const app = express();

const PORT = 4000;

app.get('/posts', (req, res) => {
    res.status(200).send(posts);
});

app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    const postsExists = posts.some((post) => post.id === parseInt(id));
    console.log(postsExists)

    if (postsExists) res.status(200).send(posts.find((post) => post.id === parseInt(id)));

    res.status(404).send({ message: "id not found" })
});


app.get('*', (req, res) => {
    res.status(404).send({ message: "Page not found" });
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: `Something is wrong! Error: ${err.message}` });
});

app.listen(PORT, () => {
    console.log(`Running is port ${ PORT }`)
});
