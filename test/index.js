
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var colors = require('colors.css/js/colors');

var colorable = require('..');

var template;
var result;
var html;
var pkg;

pkg = require('../package.json');

template = _.template( fs.readFileSync(path.join(__dirname, './template.html')) );

var primaryColors = {
  red: 'red',
  green: 'green',
  blue: 'blue'
};

var bassColors = [
  '#0076df',
  '#ff4919',
  '#00df3f',
  '#ffcf00',
  '#333',
  '#777',
  '#ccc',
  '#eee',
];

var bassdockColors = [
  '#304650',
  '#667680',
  '#c3c9c9',
  '#f3f9f9',
  '#0089ff',
  '#f95c10',
  '#00ef60',
  '#ffdf00',
  '#00b9ff',
];

var options = {
  compact: true,
  threshold: 3
};

pkg.colors = colorable(colors, options);
pkg.primaryColors = colorable(primaryColors, options);
pkg.bassColors = colorable(bassColors, options);
pkg.bassdockColors = colorable(bassdockColors, options);

html = template(pkg);


fs.writeFileSync(path.join(__dirname, './results.json'), JSON.stringify(pkg.colors, null, '  '));

fs.writeFileSync(path.join(__dirname, './index.html'), html);

