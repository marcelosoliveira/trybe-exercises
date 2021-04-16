const express = require('express');
const errorMiddleware = require('../services/middlewares/errorMiddleware');
const ufAndCityController = require('../controllers/ufAndCityController');

const router = express.Router();

router.get('/statistic', ufAndCityController.findByUfAndCity);

router.use(errorMiddleware);

module.exports = router;
