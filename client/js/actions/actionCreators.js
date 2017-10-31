require('es6-promise').polyfill();
require('isomorphic-fetch');

export function getDataAction(opts = {}) {
	return function(dispatch, getState) {
	    let url = "/api/data";

	    let	request = new Request(url, {
				method: 'GET',
				mode: 'cors',
				headers: new Headers({
					'Content-Type': 'application/json'
				})
			});

		return fetch(request).then(function(result) {
			if (result.status === 200) {
				return result.json();
			}
		}).then(function(jsonResult) {
			if (jsonResult.error) {
				console.log(jsonResult.error);
			}
			else {
				dispatch(getData(jsonResult));
			}
		}).catch(function(err) {
			console.log(err);
		});
	}
}

export function getData(data) {
	return {
		type: 'GET_DATA',
		data
	}
}
