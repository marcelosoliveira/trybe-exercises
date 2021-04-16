const express = require('express');
const errorMiddleware = require('../services/middlewares/errorMiddleware');
const cepController = require('../controllers/cepController');

const router = express.Router();

router.get('/lookup', cepController.findByCep);

router.use(errorMiddleware);

module.exports = router;
