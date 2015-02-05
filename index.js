
var _ = require('lodash');
var Color = require('color');

var minimums = {
  aa: 4.5,
  aaLarge: 3,
  aaa: 7,
  aaaLarge: 4.5
};

module.exports = function(arr, options) {

  _.defaults(options, {
    threshold: 0,
    compact: false
  });

  if (!Array.isArray(arr)) return false;

  var colors = [];
  var results = [];
  var combinations = [];

  arr.forEach(function(color) {
    colors.push(Color(color));
  });

  colors.forEach(function(color) {
    var result = options.compact ? {} : _.clone(color);
    result.hex = color.hexString();
    result.combinations = [];
    colors.forEach(function(bg) {
      if (color === bg) return false;
      var combination = options.compact ? {} : _.clone(bg);
      combination.hex = bg.hexString();
      combination.contrast = color.contrast(bg);
      combination.accessibility = {
        aa: combination.contrast >= minimums.aa,
        aaLarge: combination.contrast >= minimums.aaLarge,
        aaa: combination.contrast >= minimums.aaa,
        aaaLarge: combination.contrast >= minimums.aaaLarge,
      };
      if (combination.contrast > options.threshold) {
        result.combinations.push(combination);
      }
    });
    results.push(result);
  });

  return results;

};

