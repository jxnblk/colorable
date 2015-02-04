
var _ = require('lodash');
var tinycolor = require('tinycolor2');

module.exports = function(arr) {

  if (!Array.isArray(arr)) return false;

  var colors = [];
  var results = [];
  var combinations = [];

  arr.forEach(function(color) {
    colors.push(tinycolor(color));
  });

  colors.forEach(function(color) {
    var result = _.cloneDeep(color);
    //result.color = color;
    result.hex = '#' + color.toHex();
    result.combinations = [];
    colors.forEach(function(bg) {
      if (color === bg) return false;
      var combination = {};
      var contrast = tinycolor.readability(color, bg);
      combination.background = bg;
      combination.background.hex = '#' + bg.toHex();
      combination.contrast = contrast;
      combination.contrast.ratio = contrast.brightness / contrast.color;
      result.combinations.push(combination);
    });
    results.push(result);
  });

  return results;

};

