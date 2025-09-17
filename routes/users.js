var express = require('express');
var router = express.Router();
const usersController = require('../controllers').usersController;

router.get('/', usersController.list);
router.get('/:id', usersController.getById);

module.exports = router;
