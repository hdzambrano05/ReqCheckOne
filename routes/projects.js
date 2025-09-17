var express = require('express');
var router = express.Router();
const projectsController = require('../controllers').projectsController;

router.get('/', projectsController.list);

module.exports = router;