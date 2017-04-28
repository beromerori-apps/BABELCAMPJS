var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

// Nos conectamos a la BBDD
require('./lib/connectMongoose');
require('./models/Anuncio');
require('./models/Usuario');

//const jwtAuth = require('./lib/jwtAuth'); Para meter autenticacion en /api/anuncios/imagenes

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Para visualizar las imagenes en el POSTMAN o navegador
app.use('/api/anuncios/imagenes',  express.static(path.join(__dirname, 'public/images')));

// Para añadir autenticacion a las imagenes
//app.use('/api/anuncios/imagenes', jwtAuth, express.static(path.join(__dirname, 'public/images')));

// Rutas de nuestra aplicacion
app.use('/', require('./routes/index'));
app.use('/api/anuncios', require('./routes/api/anuncios'));
app.use('/api/usuarios', require('./routes/api/usuarios'));

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
