var db = require('../config');
var Transaction = require('../models/transaction');

var Transactions = new db.Collection();

Transactions.model = Transaction;

module.exports = Transactions;