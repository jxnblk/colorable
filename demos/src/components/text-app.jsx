
var React = require('react');
var _ = require('lodash');
var qs = require('query-string');
var colorable = require('../../..');

var ColorPreview = require('./color-preview.jsx');
var ForegroundBackgroundForm = require('./foreground-background-form.jsx');
var Footer = require('./footer.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      foreground: '#AACCFF',
      background: '#222233',
    }
  },

  pushState: _.debounce(function() {
    if (!window) return false;
    var query = '?' + qs.stringify(this.state);
    window.history.pushState(this.state, 'Colorable', query);
  }, 200),

  setForeground: function(hex) {
    this.setState({ foreground: hex }, this.pushState);
  },

  setBackground: function(hex) {
    this.setState({ background: hex }, this.pushState);
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
      maxWidth: '56rem',
      marginLeft: 'auto',
      marginRight: 'auto',
    };
    var previewStyle = {
      minHeight: '70vh',
      boxSizing: 'border-box',
    };
    var controlsStyle = {
      minHeight: '30vh',
      boxSizing: 'border-box',
    };
    return (
      <div style={style}>
        <div style={innerStyle}>
          <div className="flex flex-center px2 py3" style={previewStyle}>
            <ColorPreview {...color} />
          </div>
          <div className="px2 py3" style={controlsStyle}>
            <ForegroundBackgroundForm
              {...this.props}
              {...this.state}
              setForeground={this.setForeground}
              setBackground={this.setBackground}
              />
          </div>
          <Footer {...this.props} />
        </div>
      </div>
    )
  }

});

