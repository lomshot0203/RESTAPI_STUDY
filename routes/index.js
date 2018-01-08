var express = require('express');
var router = express.Router();

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

/*musics*/
router.get('/musics', function(req, res, next) {
    res.render('./musics/musics', {title:'musics'});
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
