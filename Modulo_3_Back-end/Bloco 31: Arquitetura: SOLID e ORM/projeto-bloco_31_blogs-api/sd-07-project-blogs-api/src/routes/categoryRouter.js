const express = require('express');
const { create, getAll } = require('../controllers/categoryController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, create);
router.get('/', authMiddleware, getAll);

module.exports = router;
