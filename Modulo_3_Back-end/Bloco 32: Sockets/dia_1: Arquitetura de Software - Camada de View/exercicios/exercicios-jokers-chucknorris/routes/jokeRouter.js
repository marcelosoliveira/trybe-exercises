const router = require('express').Router()
const { listJokes } = require('../controllers/jokeController');

router.get('/', listJokes);

module.exports = router;
