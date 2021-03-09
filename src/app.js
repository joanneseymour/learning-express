var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var servicesRouter = require('./routes/services');
var contactRouter = require('./routes/contact');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, "public")));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/services', servicesRouter);
app.use('/contact', contactRouter);

module.exports = app;
