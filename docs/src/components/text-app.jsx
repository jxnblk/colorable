/** @jsx React.DOM */

var React = require('react');
var qs = require('query-string');
var colorable = require('../../..');

var ColorPreview = require('./color-preview.jsx');
var ForegroundBackgroundForm = require('./foreground-background-form.jsx');

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
    var self = this;
    var foreground = this.state.foreground;
    var background = this.state.background;
    try {
      var color = colorable([foreground, background])[0];
      color.combo = color.combinations[0];
    } catch(e) {
      var color = {
        combo: {
          contrast: 0
        }
      };
    }
    var style = {
      color: foreground,
      backgroundColor: background,
      minHeight: '100vh',
    };
    var innerStyle = {
      maxWidth: '48rem',
      marginLeft: 'auto',
      marginRight: 'auto',
    };
    return (
      <div className="px2" style={style}>
        <div className="py3" style={innerStyle}>
          <ColorPreview {...color} />
          <ForegroundBackgroundForm
            {...this.props}
            {...this.state}
            setForeground={this.setForeground}
            setBackground={this.setBackground}
            />
        </div>
      </div>
    )
  }

});

