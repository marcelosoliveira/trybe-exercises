const express = require('express');
const cepRouter = require('./src/routes/cepRouter');
const ufAndCityRouter = require('./src/routes/ufAndCityRouter');
const errorMiddleware = require('./src/services/middlewares/errorMiddleware');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(cepRouter);
app.use(ufAndCityRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Running is port ${ PORT }`);
});
