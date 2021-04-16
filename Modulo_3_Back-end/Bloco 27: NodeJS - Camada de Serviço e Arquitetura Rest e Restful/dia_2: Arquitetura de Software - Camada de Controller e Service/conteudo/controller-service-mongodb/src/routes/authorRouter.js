const express = require('express');
const authorController = require('../controllers/authorController');
const middleware = require('../services/middleware');

const router = express.Router();

router.get('/authors', authorController.getAll);

router.get('/authors/:id', authorController.findById);

router.post('/authors', authorController.create);

router.use(middleware.errorMiddleware);

module.exports = router;
