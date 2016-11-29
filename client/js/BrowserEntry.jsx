window.jQuery = require("jquery");
window.$ = require("jquery");

require('../sass/main.scss');

const React = require('react');
const ReactDOM = require('react-dom');
const ClientApp = require('./ClientApp');
const history = require('./store').history;
const route = require('./route').route;
const ReactRouter = require('react-router');
const { match } = ReactRouter;

match({ history: history, routes: route }, (error, redirectLocation, renderProps) => {
  if (error) {
    return console.error('BrowserEntry require.ensure error', error);
  }
  
  ReactDOM.render(<ClientApp {...renderProps} />, document.getElementById('app'));
});
