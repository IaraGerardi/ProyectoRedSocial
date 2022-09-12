const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();
const session = require("express-session")
const db = require("./database/db.js")
require('./database/associations.js');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//
try {
  db.authenticate()
  console.log("Connected to database on MySQL")
} catch (error) {
  console.log(`Error on connection: ${error}`)
}
//
app.use(logger('dev'));
app.use(express.json());
app.use(cors({
  credentials:true,
  origin:["http://localhost:3000"],
  methods:["GET","POST","PUT","DELETE"]
}));
/* app.use(session( {secret: "Our secret message",resave: true, saveUninitialized: true})); */
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//
app.use('/', require('./routes/router'))
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
// listen

module.exports = app;
