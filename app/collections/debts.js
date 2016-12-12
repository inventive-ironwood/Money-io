var db = require('../config');
var Debt = require('../models/debt');

var Debts = new db.Collection();

Debts.model = Debt;

module.exports = Debts;