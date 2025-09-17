var express = require('express');
var router = express.Router();
const tasksController = require('../controllers').tasksController;

router.get('/', tasksController.list);

module.exports = router;