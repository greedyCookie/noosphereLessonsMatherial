var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController.js')

/* GET users listing. */
router.get('/', usersController.index);

router.get('/add', usersController.form);

router.post('/add', usersController.save);

module.exports = router;
