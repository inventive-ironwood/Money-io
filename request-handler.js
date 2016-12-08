var request = require('request');


exports.renderer = function(req, res) {
  for (var key in req.body) {
    console.log(key)
    exports.searchWeather(key, exports.searchTwitter, res);
  }
};