const express = require('express');
const generateToken = require('./util/generateToken');
const tokenMiddleware = require('./meddleware/tokenMeddleware');

const app = express();

const PORT = 3333;

app.use(express.json());

app.get('*', (req, res) => {
    res.status(404).send({ message: "Page not found"});
});

app.use('/login', tokenMiddleware);

app.post('/login', (req, res) => {
    return res.status(200).send({ token: generateToken() })
});

app.use((err, req, res, next) => {
    return res.status(500).send(`Something is wrong! Error: ${ err.message }`);
});

app.listen(PORT, () => {
    console.log(`Running is port ${ PORT }`);
});
