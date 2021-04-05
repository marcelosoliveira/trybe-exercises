const express = require('express');
const operation = require('./middleware/operationMiddleware')

const app = express();

const PORT = 4000;

app.get('/:operacao/:numero1/:numero2', operation.sumMiddleware);
app.get('/:operacao/:numero1/:numero2', operation.subMiddleware);
app.get('/:operacao/:numero1/:numero2', operation.multiMiddleware);
app.get('/:operacao/:numero1/:numero2', operation.divMiddleware);


app.get('*', (req, res) => {
    res.status(404).send({ message: "Page not found!" });
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: `Something is wrong! Error: ${err.message}`});
});

app.listen(PORT, () => {
    console.log(`Running is port ${ PORT }`);
});
