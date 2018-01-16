const express = require('express');
const router = express.Router();
var chat_controller = require('../controller/chat.controller');

router.get('/', chat_controller.show);

router.post('/send', chat_controller.send);

module.exports = router;