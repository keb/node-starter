const express = require('express');
const router = express.Router();
const Main = require('../controllers/mainController');

router.get('/', Main.index);

module.exports = router;