/** @jsx React.DOM */

var React = require('react');
var qs = require('query-string');
var colorable = require('../../..');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      foreground: '#acf',
      background: '#223',
    }
  },

  setForeground: function(hex) {
    this.setState({ foreground: hex });
  },

  setBackground: function(hex) {
    this.setState({ background: hex });
  },

  componentDidMount: function() {
    if (window) {
      var params = qs.parse(window.location.search);
      this.setState(params);
    }
  },

  render: function() {
    var foreground = this.state.foreground;
    var background = this.state.background;
    var style = {
      color: foreground,
      backgroundColor: background,
      minHeight: '100vh',
    };
    var color = colorable([foreground, background])[0];
    var combo = color.combinations[0];
    return (
      <div className="px2" style={style}>
        <div className="py3">
          <h1>TextApp</h1>
          <div>{color.hex} on {combo.hex}</div>
          <div>{combo.contrast}</div>
        </div>
      </div>
    )
  }

});

