const express = require('express');
const router = express.Router();
const songs = require('../controller/songs.controller');

/*songs*/
router.get('/:id', function(req, res, next) {
    res.render('./songs/songs', songs.get(req, res));
});

router.get('/', function(req, res, next) {
    res.render('./songs/songs', songs.list(req, res));
});

/*songs*/
router.post('/', function(req, res, next) {
    console.log(req.body);
    var status = songs.create(req, res);
    if (status == 200) {
        res.render('./songs/songs', songs.list(req, res));
    }
    res.send(500, "fuck");
});

module.exports = router;