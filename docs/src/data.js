
var fs = require('fs');
var path = require('path');
var marked = require('marked');
var colorable = require('../..');

var data = require('../../package.json');
var readme = fs.readFileSync(path.join(__dirname, '../../README.md'), 'utf8');
data.readme = marked(readme);

data.colors = require('colors.css/js/colors');
//data.matrix = colorable(data.colors, { compact: true });

module.exports = data;

