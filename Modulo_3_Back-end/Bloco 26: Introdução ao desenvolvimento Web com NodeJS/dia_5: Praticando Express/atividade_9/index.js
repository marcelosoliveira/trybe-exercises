const express = require('express');
const users  = require('./data/users.json');
const helpFunction = require('./util/helpFunction'); 

const app = express();

const PORT = 4000;

app.use(express.json());

app.post('/user/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const userExsits = users.some((user) => user.id === parseInt(id));

    if (typeof status !== 'boolean') return res.status(400).send(
        { message: "status isn't a boolean"});

    if (!userExsits) return res.status(404).send({ message: "user isn't found"});

    res.status(200).send(helpFunction(id, status, users));   
});


app.post('*', (req, res) => {
    res.status(404).send({ message: "Page not found" });
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: `Something is wrong! Error: ${ err.message }` });
});

app.listen(PORT, () => {
    console.log(`Running is port ${ PORT }`);
});
