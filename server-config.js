var path = require('path');
var handler = require('./request-handler');
var express = require('express');
var bodyParser = require('body-parser');
var db = require('./app/config');
var session = require('express-session');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client')));
app.use(session({secret: 'keyboard cat', resave: false, saveUninitialized: true}));
app.use(handler.check);

app.get('/signin', express.static((path.join(__dirname, './client/signin/'))));
app.post('/signin', handler.signin);
app.get('/signup', express.static((path.join(__dirname, './client/signup/'))));
app.post('/signup', handler.signup);
app.get('/logout', handler.logout);
app.get('/currency', handler.currency);
app.post('/transactions', handler.transactions);
app.get('/transactions', handler.getTransactions);
app.post('/debts', handler.debts);
app.get('/debts', handler.getDebts);

module.exports = app;
