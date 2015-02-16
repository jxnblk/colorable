/** @jsx React.DOM */

var React = require('react');

var HslForm = require('./hsl-form.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      color: this.props.color,
      isFocused: false,
      light: true,
    }
  },

  focus: function() {
    this.setState({ isFocused: true });
  },

  blur: function() {
    this.setState({ isFocused: false });
  },

  toggleFocus: function() {
    var isFocused = !this.state.isFocused;
    this.setState({ isFocused: isFocused });
  },

  updateColor: function(hex) {
    var self = this;
    this.setState({ color: hex }, function() {
      // Handle Change
    });
  },

  handleColorChange: function(e) {
    var hex = e.target.value;
    this.updateColor(hex);
  },

  removeColor: function(e) {
    e.stopPropagation();
    this.props.removeColor();
  },

  render: function() {
    var self = this;
    var color = this.state.color;
    var isFocused = this.state.isFocused;
    var light = this.props.light;
    var inputClass = 'bold full-width m0 not-rounded field-transparent ' + (light ? 'black' : 'white');
    var buttonClass = 'button button-narrow button-muted ' + (light ? 'black' : 'white');

    var detailsStyle = {
      display: isFocused ? '' : 'none'
    };

    var triggerStyle = {
      zIndex: isFocused ? '1' : ''
    };

    return (
      <div>
        <div className="fixed z1 top-0 right-0 bottom-0 left-0"
          style={detailsStyle}
          onClick={this.blur} />
        <div className="relative px1" style={triggerStyle}>
          <div className="flex flex-center">
            <input type="text"
              className={inputClass}
              value={color}
              onFocus={this.focus}
              onChange={this.handleColorChange} />
            <a href="#!" onClick={this.removeColor}
              className={buttonClass}
              title="Remove color">
                &times;
            </a>
          </div>
          <div className="absolute z1 p2 bg-white rounded"
            style={detailsStyle}>
            <HslForm color={color}
              updateHex={this.updateColor} />
          </div>
        </div>
      </div>
    )
  }

});
