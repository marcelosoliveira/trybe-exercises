const express = require('express');
const middleware = require('./middleware');
const util = require('./util');
const recipes = require('./data/recipes.json');

const app = express();

const PORT = 3000;

app.use(express.json());

app.post('/recipe/:id/ingredients', middleware.recipesExists);
app.delete('/recipe/:id/ingredients', middleware.recipesExists);

app.post('/recipe/:id/ingredients', (req, res) => {
    const { id } = req.params;
    const { insert } = req.body;
    util.insertRecipes(id, insert, recipes);

    res.status(201).send({ message: "Ingredients successfully added" });
});

app.delete('/recipe/:id/ingredients', (req, res) => {
    const { id } = req.params;
    const { deletes } = req.body;
    util.deleteRecipes(id, deletes, recipes);

    res.status(200).send({ message: "Ingredients successfully removed" });
});

app.get('/recipe', (req, res) => {
    res.status(200).send(recipes);
});


app.get('*', middleware.pageNotFoundMiddleware);
app.post('*', middleware.pageNotFoundMiddleware);
app.delete('*', middleware.pageNotFoundMiddleware);

app.use(middleware.errorMiddleware);

app.listen(PORT, () => {
    console.log(`Running is port ${ PORT }`);
});
