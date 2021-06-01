require('dotenv/config');
const express = require('express');
const cors = require('cors');
const code = require('http-status-codes');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());

const { PORT } = process.env;

app.use(express.static(`${__dirname}/public`));

require('./sockets/product')(io);

http.listen(PORT, () => {
  console.log(`Running is port ${PORT}`);
});

app.use((err, _req, res, _next) => {
  res.status(code.INTERNAL_SERVER_ERROR).send({
    message: `Something is wrong! Error: ${err.message}`,
  });
});
