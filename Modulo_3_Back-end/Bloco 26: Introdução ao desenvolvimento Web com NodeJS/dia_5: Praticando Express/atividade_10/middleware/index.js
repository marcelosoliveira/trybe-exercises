const pageNotFoundMiddleware = require('./pageNotFoundMiddleware');
const errorMiddleware = require('./errorMiddleware');
const recipesExists = require('./recipesExistsMiddleware');

module.exports = { pageNotFoundMiddleware, errorMiddleware, recipesExists };