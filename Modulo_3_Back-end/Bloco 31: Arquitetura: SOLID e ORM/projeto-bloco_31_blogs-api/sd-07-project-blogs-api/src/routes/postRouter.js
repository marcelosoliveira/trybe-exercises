const express = require('express');
const {
  create, getAll, getById, update,
  deletePost, searchPost } = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, create);
router.get('/', authMiddleware, getAll);
router.get('/search', authMiddleware, searchPost);
router.get('/:id', authMiddleware, getById);
router.put('/:id', authMiddleware, update);
router.delete('/:id', authMiddleware, deletePost);

module.exports = router;
