var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var songs = require('./routes/songs');

const multer = require('multer');
const upload = multer({ dest: 'data/' });


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
/*공용 접근*/
app.use(express.static(path.join(__dirname, 'public')));
/*bootstrap  적용으로 node_modules에 접근하기 위한 설정*/
app.use('/lib', express.static(__dirname + '/node_modules'));
app.use('/songs', express.static(__dirname + '/data/songs'));

app.use('/', index);

app.post('/songs',  upload.array('file'), function (req, res, next) {
  console.log(1);
});

app.use('/songs', songs);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
///