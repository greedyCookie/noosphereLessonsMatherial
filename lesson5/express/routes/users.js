var express = require('express');
var router = express.Router();
var usersControleer = require('../controllers/usersController.js')

/* GET users listing. */
router.get('/', usersControleer.index);

module.exports = router;
