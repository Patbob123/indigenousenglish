let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '.')));

app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/index.html');
});

app.use(function (req, res, next) {
  res.status(404).send("BAD");
});

module.exports = app;
