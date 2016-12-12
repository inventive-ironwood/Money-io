var db = require('../config');

var Transaction = db.Model.extend({

  tableName: 'spendings',
  initialize: function() {}
});

module.exports = Transaction;