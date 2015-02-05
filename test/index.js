
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var Humanize = require('humanize-plus');
var clrs = require('colors.css/js/colors');

var colorcheck = require('..');

var template;
var colors;
var result;
var html;
var pkg;

pkg = require('../package.json');

pkg.Humanize = Humanize;

template = _.template( fs.readFileSync(path.join(__dirname, './template.html')) );

_.forIn(clrs, function(val, key) {
  colors.push(val);
});


pkg.colors = colorcheck(colors, { compact: true });

html = template(pkg);


fs.writeFileSync(path.join(__dirname, './results.json'), JSON.stringify(pkg.colors, null, '  '));

fs.writeFileSync(path.join(__dirname, './index.html'), html);

