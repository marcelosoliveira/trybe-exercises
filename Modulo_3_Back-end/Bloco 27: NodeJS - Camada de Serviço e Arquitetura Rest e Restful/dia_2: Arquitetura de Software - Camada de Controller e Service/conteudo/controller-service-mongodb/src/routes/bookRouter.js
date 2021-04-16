const express = require('express');
const bookController = require('../controllers/bookController');
const middleware = require('../services/middleware');

const router = express.Router();

router.get('/books', bookController.getAll);

router.get('/books/author/:idAuthor', bookController.getByAuthorId);

router.get('/books/:id', bookController.findById);

router.post('/books', bookController.create);

router.use(middleware.errorMiddleware);

module.exports = router;