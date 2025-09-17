var express = require('express');
var router = express.Router();
const requirement_historyController = require('../controllers').requirement_historyController;

router.get('/', requirement_historyController.list);

module.exports = router;