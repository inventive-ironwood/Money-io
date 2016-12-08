var request = require('request');


exports.currency = function(req, res) {
  request.get({url: 'http://api.fixer.io/latest?base=USD'},  function(error, response, body) { 
    if (!error) { 
      res.send(JSON.parse(body));
    } else{
      console.log('error');
    }
  }); 
};