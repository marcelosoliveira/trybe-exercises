const express = require('express');
const tokenValidation = require('./validation/tokenValidation');
const dataApi = require('./server/api')

const app = express();

const PORT = 4000;

app.use('/btc/price', tokenValidation);

app.get('/btc/price', async (req, res) => {
    res.status(200).send(await dataApi());
});


app.get('*', (req, res) => {
    res.status(404).send({ message: "Page not found"});
});

app.use((err, req, res, next) => {
    res.status(500).send({
        message: `Something is wrong! Error: ${err.message}`
    });
});

app.listen(PORT, () => {
    console.log(`Running is port ${ PORT }`);
});