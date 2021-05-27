const express = require('express');
const cors = require('cors');
const userRouter = require('./src/routes/userRouter');
const categoryRouter = require('./src/routes/categoryRouter');
const postRouter = require('./src/routes/postRouter');
const { route: login } = require('./src/auth');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use('/user', userRouter);
app.use(login);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);

app.listen(PORT, () => {
  console.log(`Running is import  ${PORT}!`);
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ error: err.message });
});
