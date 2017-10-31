var data = require('../controllers/data');

var routesAPI = function(app){
	app.get('/api/data', data.get);
}


module.exports = routesAPI;