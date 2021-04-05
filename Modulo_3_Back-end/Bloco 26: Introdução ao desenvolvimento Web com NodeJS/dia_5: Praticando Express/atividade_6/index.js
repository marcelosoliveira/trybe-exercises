const express = require('express');
const recipes = require('./data/recipes.json');

const app = express();

const PORT = 4000;

app.get('/recipe/:id', (req, res) => {
    const { id } = req.params;
    const deletedRecipes = recipes.some((recipe) => recipe.id === parseInt(id));

    if (deletedRecipes) res.status(200).send(
        recipes.find((recipe) => recipe.id === parseInt(id)));

    res.status(404).send({ message: "recipe not found" });
});


app.get('*', (req, res) => {
    res.status(404).send({ message: "Page not found" });
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: `Something is wrong! Error: ${err.message}`});
});

app.listen(PORT, () => {
    console.log(`Running is port ${ PORT }`);
});
