const recipes = require('../data/recipes.json');

const recipesExists = (req, res, next) => {
    const { id } = req.params;
    const idExists = recipes.some((recipe) => recipe.id === parseInt(id));

    if (idExists) return next()

    return res.status(404).send({ message: "Recipes not found" });
}

module.exports = recipesExists;
