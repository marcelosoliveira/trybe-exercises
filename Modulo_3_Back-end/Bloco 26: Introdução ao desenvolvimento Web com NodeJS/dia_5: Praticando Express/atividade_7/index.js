const express = require('express');
const updateRecipes = require('./util/updateRecipes');

const app = express();

const PORT = 4000;

app.use(express.json());

app.put('/recipe/:id', (req, res) => {
    res.status(200).send(updateRecipes(req, res));
});


app.put('*', (req, res) => {
    res.status(404).send({ message: "Request not found" });
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: `Something is wrong! Error: ${ err.message }` });
});

app.listen(PORT, () => {
    console.log(`Running is port ${ PORT }`);
});
