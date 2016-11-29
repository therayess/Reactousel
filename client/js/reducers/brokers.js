function brokers(state = {}, action) {
	switch (action.type) {
		case 'GET_BROKERS':
			return [...action.brokers]
		default:
			return state;
	}
}

export default brokers;
