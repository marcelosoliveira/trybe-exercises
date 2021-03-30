const express = require('express');
const tokenMiddleware = require('./tokenMiddleware');
const routerSingup = require('./routerSingup');
const app = express();

app.use(express.json());
app.use('/', tokenMiddleware);
app.use('/singup', routerSingup);


app.get('*', (req, res) => {
    res.status(404).json("Route not found");
});

app.post('*', (req, res) => {
    res.status(404).json("Route not found");
});


app.use((err, req, res, next) => {
    res.status(500).json(`Something is wrong! Error: ${ err.message }`);
});

app.listen(3000, () => {
    console.log("Running is port 3000");
});

