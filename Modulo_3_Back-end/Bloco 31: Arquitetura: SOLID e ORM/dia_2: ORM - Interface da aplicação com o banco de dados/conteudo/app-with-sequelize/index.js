const express = require('express');
const Users = require('./controllers/userController');

const app = express();

app.use(express.json());

const PORT = 3000;

app.use(Users);

app.listen(PORT, () => {
    console.log(`Running is port ${ PORT }`);
});

app.use((err, req, res,next) => {
    console.error(`Something went wrong ${err.message}`)
});