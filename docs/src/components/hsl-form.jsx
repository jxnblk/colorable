/** @jsx React.DOM */

var React = require('react');
var Color = require('color');

module.exports = React.createClass({

  getInitialState: function() {
    var hsl = Color(this.props.color).hsl();
    return {
      hue: hsl.h,
      saturation: hsl.s,
      lightness: hsl.l,
    }
  },

  updateColor: function() {
    var hex = Color({
      h: this.state.hue,
      s: this.state.saturation,
      l: this.state.lightness
    }).hexString();
    if (hex != this.props.color) {
      this.props.updateColor(hex);
    }
  },

  updateHue: function(e) {
    this.setState({ hue: e.target.value }, function() {
      this.updateColor();
    });
  },

  updateSaturation: function(e) {
    this.setState({ saturation: e.target.value }, function() {
      this.updateColor();
    });
  },

  updateLightness: function(e) {
    this.setState({ lightness: e.target.value }, function() {
      this.updateColor();
    });
  },

  renderSlider: function(facet) {
    return (
      <div className="px1">
        <label className="h5 bold lh1 block">
          {facet.label}
        </label>
        <input type="range"
          className="full-width m0 range-light"
          value={facet.value}
          onChange={facet.onChange}
          min={facet.min}
          max={facet.max}
          tabIndex={this.props.tabIndex}
          />
      </div>
    )
  },

  componentWillReceiveProps: function(nextProps) {
    try {
      var hsl = Color(nextProps.color).hsl();
      this.setState({
        hue: hsl.h,
        saturation: hsl.s,
        lightness: hsl.l,
      });
    } catch(e) {
    }
  },

  render: function() {
    var hslArray = [
      {
        label: 'Hue',
        value: this.state.hue,
        onChange: this.updateHue,
        min: 0,
        max: 360
      },
      {
        label: 'Saturation',
        value: this.state.saturation,
        onChange: this.updateSaturation,
        min: 0,
        max: 100
      },
      {
        label: 'Lightness',
        value: this.state.lightness,
        onChange: this.updateLightness,
        min: 0,
        max: 100
      },
    ];
    return (
      <form className="flex flex-center">
        {hslArray.map(this.renderSlider)}
      </form>
    )
  }

});

