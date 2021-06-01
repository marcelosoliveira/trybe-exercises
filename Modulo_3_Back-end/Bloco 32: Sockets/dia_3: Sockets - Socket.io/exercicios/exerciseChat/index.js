require('dotenv/config');
const express = require('express');
const code = require('http-status-codes');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  }
});

app.use(express.static(`${__dirname}/public`));

const { PORT } = process.env;

require('./sockets/feed')(io);

/* app.get('/', (_req, res) => {
  res.sendFile(`index.html`);
}); */

http.listen(PORT, () => {
  console.log(`Running is port ${PORT}`);
});

app.use((err, req, res, next) => {
  res.status(code.INTERNAL_SERVER_ERROR).send({
    message: `Something is wrong! ERROR: ${ err.message }`,
  })
});
