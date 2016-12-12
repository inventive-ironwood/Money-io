var db = require('../config');

var Debt = db.Model.extend({

  tableName: 'debts',
  initialize: function() {}
});

module.exports = Debt;