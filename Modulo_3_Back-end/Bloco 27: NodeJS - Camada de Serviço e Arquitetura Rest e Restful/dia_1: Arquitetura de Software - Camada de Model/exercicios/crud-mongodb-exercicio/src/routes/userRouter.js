const express = require('express');
const userController = require('../controller/userController');
const middleware = require('../service/middleware');
const router = express.Router();

router.get('/user', userController.findAll);
router.get('/user/:id', userController.findById);
router.post('/user', middleware.attributeMiddleware, userController.createUser);
router.put('/user/:id', middleware.attributeMiddleware, userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

router.use(middleware.errorMiddleware);

module.exports = router;
