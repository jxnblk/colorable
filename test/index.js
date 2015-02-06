
var fs = require('fs');
var path = require('path');
var _ = require('lodash');

var colorable = require('..');

var template;
var result;
var html;
var pkg;

pkg = require('../package.json');

template = _.template( fs.readFileSync(path.join(__dirname, './template.html')) );

var colors = {
  red: 'red',
  green: 'green',
  blue: 'blue'
};

pkg.colors = colorable(colors, { compact: true });

html = template(pkg);


fs.writeFileSync(path.join(__dirname, './results.json'), JSON.stringify(pkg.colors, null, '  '));

fs.writeFileSync(path.join(__dirname, './index.html'), html);

