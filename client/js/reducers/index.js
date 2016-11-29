import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import brokers from './brokers';

const rootReducer = combineReducers({brokers, routing: routerReducer});

export default rootReducer;
