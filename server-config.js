var path = require('path');
var handler = require('./request-handler');
var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');

var app = express();
app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static((path.join(__dirname, './'))));


module.exports = app;