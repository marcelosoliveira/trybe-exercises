// simpsons.js
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send('Hello World!');
});

router.get('/homer', function (req, res) {
  res.send('Hello Homer!');
});

module.exports = router;


// simpsons.js
/* const express = require('express');
const router = express.Router(); */

/* Se aplica somente às rotas que fazem parte desse Router */
/* router.use(function (req, res, next) {
  console.log('Hora:', Date.now());
  next();
});

router.get('/', function (req, res) {
  res.send('Hello World!');
});

router.get('/homer', function (req, res) {
  res.send('Hello Homer!');
});

module.exports = router; */