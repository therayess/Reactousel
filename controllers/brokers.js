var request = require('request');
var brokers = {};

// controller that handles brokers listings GET request.
brokers.get = function (req, res) {
	
	var skip = req.query.skip;
	var limit = req.query.limit;

	request('https://www.propertyfinder.ae/en/find-broker/ajax/search?page=1', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    res.send(body);
	  }
	});
};

module.exports = brokers;