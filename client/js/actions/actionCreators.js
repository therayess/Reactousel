require('es6-promise').polyfill();
require('isomorphic-fetch');

/* Areas actions
------------------------------------------------*/

export function getBrokersAction(opts = {}) {
	return function(dispatch, getState) {
	    let url = "https://www.propertyfinder.ae/en/find-broker/ajax/search?page=1";

	    let	request = new Request(url, {
				method: 'GET',
				mode: 'cors',
				headers: new Headers({
					'Content-Type': 'application/json'
				})
			});

		return fetch(request).then(function(result) {
			console.log(result);
			if (result.status === 200) {
				return result.json();
			}
		}).then(function(jsonResult) {
			console.log(jsonResult);
			if (jsonResult.error) {
				console.log(jsonResult.error);
			}
			else {
				dispatch(getBrokers(jsonResult.data));
			}
		}).catch(function(err) {
			console.log(err);
		});
	}
}

export function getBrokers(brokers) {
	return {
		type: 'GET_BROKERS',
		brokers
	}
}
