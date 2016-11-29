import React from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { store, history } from './store';
import { route } from './route';

class ClientApp extends React.Component {
  render () {
    return (
		<Provider store={store}>
			<Router routes={route} history={history} />
		</Provider>
    )
  }
}

module.exports = ClientApp;
