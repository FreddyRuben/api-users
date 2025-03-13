const express = require('express');
const router = express.Router();

const User = require('../controllers/user.controller');

router.get('/api', User.getUsers);
router.get('/api/:id', User.getUser);
router.post('/api', User.saveUser);
router.put('/api/:id', User.editUser);
router.delete('/api/:id', User.deleteUser);

module.exports = router;