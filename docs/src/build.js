// Static site build task

var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var React = require('react');
require('node-jsx').install();

var template = _.template(fs.readFileSync(path.join(__dirname, './layouts/default.html'), 'utf8'));
var App = React.createFactory(require('./components/app.jsx'));
var TextApp = React.createFactory(require('./components/text-app.jsx'));

var data = require('./data');

// Main Index
data.app = React.renderToString(App(data));
data.script = 'docs/app.min.js';
var html = template(data);
fs.writeFileSync(path.join(__dirname, '../../index.html'), html);

// Text demo app
data.app = React.renderToString(TextApp(data));
data.script = 'app.min.js';
var html = template(data);
fs.writeFileSync(path.join(__dirname, '../text/index.html'), html);

