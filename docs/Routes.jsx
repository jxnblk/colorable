
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Root = require('./components/Root.jsx');
var Index = require('./components/Index.jsx');

var Routes = (
  <Route handler={Root} path="/">
    <DefaultRoute handler={Index} />
  </Route>
);

module.exports = Routes;

