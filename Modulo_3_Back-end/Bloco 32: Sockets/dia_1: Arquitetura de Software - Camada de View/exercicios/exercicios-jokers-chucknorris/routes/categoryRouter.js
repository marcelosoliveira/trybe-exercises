const router = require('express').Router()
const { listCategories, searchCategories } = require('../controllers/categoryController');

router.get('/', listCategories);
router.get('/search', searchCategories);

module.exports = router;
