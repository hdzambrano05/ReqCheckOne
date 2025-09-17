var express = require('express');
var router = express.Router();
const user_projectsController = require('../controllers').user_projectsController;

router.get('/', user_projectsController.list);

module.exports = router;