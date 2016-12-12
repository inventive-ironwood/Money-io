var db = require('../config');

var Transaction = db.Model.extend({

  tableName: 'spendings',
  hasTimestamps: true,

  initialize: function() {}
});

module.exports = Transaction;