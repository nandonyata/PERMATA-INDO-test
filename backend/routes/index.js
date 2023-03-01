const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user');
const categoryControllers = require('../controllers/category');
const taskControllers = require('../controllers/task');
const authentication = require('../middlewares/authentication');

router.get('/users', userControllers.findAll);
router.post('/register', userControllers.register);
router.post('/login', userControllers.login);

router.use(authentication);

router.get('/categories', categoryControllers.findAll);
router.post('/categories', categoryControllers.addCategory);

router.get('/tasks', taskControllers.findAll);
router.post('/tasks', taskControllers.addTask);
router.patch('/tasks/:id', taskControllers.updateTask);
router.delete('/tasks/:id', taskControllers.delete);

module.exports = router;
