var path = require('path');
var handler = require('./request-handler');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static((path.join(__dirname, './'))));
app.get('/currency', handler.currency);

module.exports = app;