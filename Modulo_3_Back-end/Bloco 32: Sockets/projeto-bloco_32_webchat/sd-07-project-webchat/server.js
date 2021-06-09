require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');
const code = require('http-status-codes');
const cors = require('cors');

const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  } });

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));

require('./sockets/client')(io);

http.listen(PORT, () => console.log('Running is port %s', PORT));

app.use((err, _req, res, _next) => {
  res.status(code.INTERNAL_SERVER_ERROR).send({
    message: `Something is wrong! Error: ${err.message}`,
  });
});
