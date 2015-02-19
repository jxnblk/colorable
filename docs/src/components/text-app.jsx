/** @jsx React.DOM */

var React = require('react');
var qs = require('query-string');
var colorable = require('../../..');

var ColorPreview = require('./color-preview.jsx');
var HslForm = require('./hsl-form.jsx');

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

    var handleForegroundChange = function(e) {
      self.setForeground(e.target.value);
    };
    var handleBackgroundChange = function(e) {
      self.setBackground(e.target.value);
    };
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

    console.log('render');

    return (
      <div className="px2" style={style}>
        <div className="py3" style={innerStyle}>
          <ColorPreview {...color} />
          <h1>TextApp</h1>
          <div>{color.hex} on {color.combo.hex}</div>
          <div>{color.combo.contrast}</div>
          <form className="sm-flex flex-center mxn2">
            <div className="sm-col-6 px2">
              <label className="h5 bold">Foreground</label>
              <input type="text"
                value={foreground}
                onChange={handleForegroundChange}
                className="block full-width field-dark" />
            </div>
          </form>
        </div>
      </div>
    )
  }

});

