var db = require('../config');

var Debt = db.Model.extend({

  tableName: 'debts',
  hasTimestamps: true,
  initialize: function() {}
});

module.exports = Debt;