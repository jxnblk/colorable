/**
 * HSL (Hue, Saturation, Lightness) sliders widget
 *
 * Copied from https://github.com/jxnblk/react-hsl-sliders/
 */

import React from 'react'
import Color from 'color'
import createReactClass from 'create-react-class'

export default createReactClass({

  getDefaultProps: function() {
    return {
      value: '',
      onChange: false,
      id: '',
      inline: true,
      tabIndex: 0,
      hideValues: false,
    }
  },

  getInitialState: function() {
    var hsl = Color(this.props.value).hsl();
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
    if (hex !== this.props.value) {
      this.props.onChange(hex);
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

  componentWillReceiveProps: function(nextProps) {
    try {
      var hsl = Color(nextProps.value).hsl();
      this.setState({
        hue: hsl.h,
        saturation: hsl.s,
        lightness: hsl.l,
      });
    } catch(e) {
    }
  },

  renderRange: function(range) {
    var label = range.label;
    label += this.props.hideValues ? '' : ' ' + range.value + range.symbol;
    var id = this.props.id + '-' + range.label;
    return (
      <div
        key={id}
        className='HslSliders-formGroup px1'>
        <label
          htmlFor={id}
          className='HslSliders-label h5 bold block'>
          {label}
        </label>
        <input type="range"
          id={id}
          className='HslSliders-input col-12 m0 input-range range-light'
          value={range.value}
          onChange={range.onChange}
          min={range.min}
          max={range.max}
          tabIndex={this.props.tabIndex}
          />
      </div>
    )
  },

  render: function() {
    var ranges = [
      {
        label: 'Hue',
        value: this.state.hue,
        onChange: this.updateHue,
        min: 0,
        max: 360,
        symbol: '°',
      },
      {
        label: 'Saturation',
        value: this.state.saturation,
        onChange: this.updateSaturation,
        min: 0,
        max: 100,
        symbol: '%',
      },
      {
        label: 'Lightness',
        value: this.state.lightness,
        onChange: this.updateLightness,
        min: 0,
        max: 100,
        symbol: '%',
      },
    ];
    return (
      <div className='HslSliders flex flex-center mxn1'>
        {ranges.map(this.renderRange)}
      </div>
    )
  }

});

