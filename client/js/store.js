import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import thunk from 'redux-thunk';

// import root reducer
import rootReducer from './reducers/index';

// create an object for the default data
const initialState = {
	data: []
};

const store = createStore(rootReducer, initialState, compose(
	applyMiddleware(thunk),
	typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
));

const history = browserHistory;

module.exports = { store, history };
