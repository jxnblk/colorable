
var fs = require('fs');
var path = require('path');
var _ = require('lodash');

var template = _.template(fs.readFileSync(path.join(__dirname, './grid.html'), 'utf8'));

module.exports = function(colors) {
  return template({ colors: colors });
};

