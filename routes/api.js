var brokers = require('../controllers/brokers');

var routesAPI = function(app){
	app.get('/api/brokers', brokers.get);
}


module.exports = routesAPI;