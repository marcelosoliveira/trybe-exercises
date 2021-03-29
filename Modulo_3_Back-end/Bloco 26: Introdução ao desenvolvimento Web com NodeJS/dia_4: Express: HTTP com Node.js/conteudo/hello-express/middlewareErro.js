const express = require('express');

const app = express();

//app.use(middleware1);
//app.get('/' /* ... */);
//app.use(function (err, req, res, next) {
//  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
//});


app.use(function logErrors(err, req, res, next) {
  console.error(err.stack);
  // passa o erro para o próximo middleware
  next(err);
});
app.use(function (err, req, res, next) {
  res.status(500);
  res.send({ error: err });
});