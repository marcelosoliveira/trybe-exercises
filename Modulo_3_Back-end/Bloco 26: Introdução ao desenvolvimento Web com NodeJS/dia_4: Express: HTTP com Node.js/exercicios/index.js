const express = require('express');

const routeSimpsons = require('./simpsons')

const app = express();

app.use(express.json());

const errorMeddleware = (err, req, res, next) => {
    res.status(500).send(`Something is wrong! Erro: ${err.message}`);
}


app.get('/ping', (req, res) => {
    res.json({
        message: "Pong!"
    });
});

app.post('/hello', (req, res) => {
    res.json({
        message: `Hello, ${req.body.name}!`
    });
});

app.post('/hello', (req, res) => {
    if (req.body.age <= 17) res.status(401).json({message: "Unauthorized"});
    res.status(200).json({
        message: `Hello, ${req.body.name}!`
    });
});

app.put('/users/:name/:age', (req, res) => {
    res.json({
        message: `His name is ${req.params.name} and you have ${req.params.age} years old`
    });
});

app.use('/simpsons', routeSimpsons);

app.get('*', (req, res) => {
    res.status(404).send("Route not found");
});

app.post('*', (req, res) => {
    res.status(404).send("Route not found");
});


app.use(errorMeddleware);

app.listen(3000, () => {
    console.log("Running on port 3000");
});
