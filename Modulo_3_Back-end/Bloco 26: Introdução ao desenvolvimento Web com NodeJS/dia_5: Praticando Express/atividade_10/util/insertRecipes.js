const fs = require('fs');

const insertRecipes = (id, insert, recipes) => {
    const recipeFilter = recipes.filter((recipe) => recipe.id !== parseInt(id));

    let newRecipe = []
    recipes.forEach((recipe) => {
        if (recipe.id === parseInt(id)) {
            newRecipe = [...recipeFilter, { id: parseInt(recipe.id), name: recipe.name, ingredientes: [...recipe.ingredientes, insert]}];
        }
    });

    fs.writeFileSync('./data/recipes.json', JSON.stringify(newRecipe.sort(
        (a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)));
}

module.exports = insertRecipes;
