const express = require('express');
const routeRecipes = require('./router/routes');
const middleware = require('./middleware');

const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/recipe', routeRecipes);

app.use(middleware.errorMiddleware);

app.listen(PORT, () => {
    console.log(`Running is port ${ PORT }`);
});
