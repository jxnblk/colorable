// App

var React = require('react');
var data = require('./data');

var TextApp = React.createFactory(require('./components/text-app.jsx'));

React.render(
  TextApp(data),
  document.getElementById('app')
);


