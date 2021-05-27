const express = require('express');
const { create, getAll, getById, deleteUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', create);
router.get('/', authMiddleware, getAll);
router.get('/:id', authMiddleware, getById);
router.delete('/me', authMiddleware, deleteUser);

// router.put('/profile', update);

module.exports = router;
