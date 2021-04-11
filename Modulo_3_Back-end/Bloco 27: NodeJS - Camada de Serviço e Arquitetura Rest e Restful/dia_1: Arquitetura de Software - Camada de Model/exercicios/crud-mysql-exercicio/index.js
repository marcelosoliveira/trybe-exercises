const express = require('express');
const router = require('./src/routes/userRouter');
const middleware = require('./src/service/middleware');

const app = express();

app.use(express.json());

const PORT = 3001;

app.use(router)

app.use(middleware.errorMiddleware);

app.listen(PORT, () => {
    console.log(`Running is port ${ PORT }`);
});
