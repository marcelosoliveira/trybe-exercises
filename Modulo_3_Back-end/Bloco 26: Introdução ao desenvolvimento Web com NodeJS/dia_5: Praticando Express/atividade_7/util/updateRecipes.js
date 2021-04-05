const fs = require('fs');
const recipes = require('../data/recipes.json');

const updateRecipes = (req, res) => {
    const { id } = req.params;
    const { name, ingredientes } = req.body;

    const recipeExists = recipes.some((recipe) => recipe.id === parseInt(id));

    if(!recipeExists) return res.status(404).send({ message: "recipe not found" });

    const newRecipes = [...recipes.filter((recipe) => recipe.id !== parseInt(id)),
        { id: parseInt(id), name, ingredientes }];
    
    fs.writeFileSync('./data/recipes.json', JSON.stringify(newRecipes.sort(
        (a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)
    ));

    return newRecipes;
}

module.exports = updateRecipes;
