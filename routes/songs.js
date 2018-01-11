var express = require('express');
var router = express.Router();
var song_controller = require('../controller/songs.controller');

/*songs*/
router.get('/', song_controller.song_list);
router.post('/upload', song_controller.song_create_post);

module.exports = router;