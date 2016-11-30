require('babel-register');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//requiring local modeles
var configs = require('./config');
var routes = require('./routes/routes');

// parse application/x-www-form-urlencoded.
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json.
app.use(bodyParser.json());

//Initilizing routes.
routes(app);

// serve client side code.
app.use('/',express.static('client'));

const React = require('react')
const ReactDOMServer = require('react-dom/server')
const ReactRouter = require('react-router')
const match = ReactRouter.match
const RouterContext = ReactRouter.RouterContext
const ReactRedux = require('react-redux')
const Provider = ReactRedux.Provider
const Store = require('./client/js/store.js')
const store = Store.store
const _ = require('lodash')
const fs = require('fs')
const baseTemplate = fs.readFileSync('./client/index.html')
const template = _.template(baseTemplate)
const clientRoutes = require('./client/js/route.js').route

app.use((req, res) => {
  match({ routes: clientRoutes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const body = ReactDOMServer.renderToString(
        React.createElement(Provider, {store},
          React.createElement(RouterContext, renderProps)
        )
      )
      res.status(200).send(template({body}))
    } else {
      res.status(404).send('Not found')
    }
  })
})

//Finally starting the listener
app.listen(configs.applicationPort, "0.0.0.0", function () {
  console.log('Propertyfinder test app listening on port '+configs.applicationPort+'!');
});
