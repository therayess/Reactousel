import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './components/Main';
import Landing from './components/Landing';

if (typeof module !== 'undefined' && module.require) {
	if (typeof require.ensure === 'undefined') {
		require.ensure = require('node-ensure');
	}
}

const route = (
  <Route name="Home" path="/" component={Main}>
    <IndexRoute name="Home" getComponent={(location, cb) => require.ensure([], () => cb(null, require('./components/Landing')))}></IndexRoute>
  </Route>
)

module.exports = { route };
