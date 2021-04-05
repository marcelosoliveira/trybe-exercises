const express  = require('express');
const util = require('../util');
const middleware = require('../middleware');
const recipes = require('../data/recipes.json');

const router = express.Router();

router.post('/:id/ingredients', middleware.recipesExists);
router.delete('/:id/ingredients', middleware.recipesExists);

router.post('/:id/ingredients', (req, res) => {
    const { id } = req.params;
    const { insert } = req.body;
    util.insertRecipes(id, insert, recipes);

    res.status(201).send({ message: "Ingredients successfully added" });
});

router.delete('/:id/ingredients', (req, res) => {
    const { id } = req.params;
    const { deletes } = req.body;
    util.deleteRecipes(id, deletes, recipes);

    res.status(200).send({ message: "Ingredients successfully removed" });
});

router.get('/', (req, res) => {
    res.status(200).send(recipes);
});


router.get('*', middleware.pageNotFoundMiddleware);
router.post('*', middleware.pageNotFoundMiddleware);
router.delete('*', middleware.pageNotFoundMiddleware);

router.use(middleware.errorMiddleware);

module.exports  = router;
