var db = require('../config');

var User = db.Model.extend({

  tableName: 'users',
  initialize: function() {}
});

module.exports = User;