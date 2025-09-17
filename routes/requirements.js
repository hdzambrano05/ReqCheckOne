var express = require('express');
var router = express.Router();
const requirementsController = require('../controllers').requirementsController;

router.get('/', requirementsController.list);

module.exports = router;    