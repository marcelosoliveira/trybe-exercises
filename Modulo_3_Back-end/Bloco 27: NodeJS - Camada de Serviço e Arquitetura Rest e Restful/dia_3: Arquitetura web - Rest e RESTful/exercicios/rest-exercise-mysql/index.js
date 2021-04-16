const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require('./src/routes/productRouter');
const errorMiddleware = require('./src/services/middlewares/errorMiddleware');

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(productRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Running is port ${ PORT }` );
});
