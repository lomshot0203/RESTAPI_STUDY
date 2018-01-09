/*
* index 라우터를 관리한다.
*
* */
var express = require('express');
var router = express.Router();
const songsList = require('../data/songs/songsList');
const songsList = require('../data/s');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Redrooster\'s Blog'});
});

/*about*/
router.get('/about', function(req, res, next) {
    res.render('./about/about', {title:'about'});
});

/*artists*/
router.get('/artists', function(req, res, next) {
    res.render('./artists/artists', {title:'artists'});
});

/*songs*/
router.get('/songs', function(req, res, next) {
    var sendData = {
        title : 'Songs',
        songList : songsList
    };
    res.render('./songs/songs', sendData);
});

/*programming*/
router.get('/programming', function(req, res, next) {
    res.render('./programming/programming', {title:'programming'});
});

/*board*/
router.get('/board', function(req, res, next) {
    res.render('./board/board', {title:'board'});
});

module.exports = router;
