/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      color: {
        hex: '',
      },
      combo: {
        hex: '',
        contrast: 0
      }
    }
  },

  renderBadge: function() {
    if (!this.props.combo.accessibility) {
      return false;
    }
    var level = this.props.combo.accessibility;
    var style = {
      color: this.props.combo.hex,
      backgroundColor: this.props.hex
    };
    if (level.aaa) {
      return (<div className="h6 bold inline-block px1 rounded" style={style}>AAA</div>)
    } else if (level.aa) {
      return (<div className="h6 bold inline-block px1 rounded" style={style}>AA</div>)
    } else if (level.aaLarge) {
      return (<div className="h6 bold inline-block px1 rounded" style={style}>AA Large</div>)
    } else {
      return (<div className="h6 bold inline-block">Fail</div>)
    }
  },

  render: function() {
    var color = this.props.hex;
    var backgroundColor = this.props.combo.hex;
    var previewStyle = {
      color: color,
      backgroundColor: backgroundColor
    };
    var contrast = this.props.combo.contrast.toFixed(2);
    return (
      <div className="mb2"
        style={previewStyle}>
        <div className="flex flex-center flex-wrap mxn2">
          <h1 className="h00 h00-responsive flex-auto px2 m0">Aa</h1>
          <div className="bold px2">{contrast}</div>
          <div className="px2">
            {this.renderBadge()}
          </div>
        </div>
        <h2 className="h1 mt0">Contrast</h2>
        <p className="">Contrast is the difference in luminance or color that makes an object (or its representation in an image or display) distinguishable. In visual perception of the real world, contrast is determined by the difference in the color and brightness of the object and other objects within the same field of view. Because the human visual system is more sensitive to contrast than absolute luminance, we can perceive the world similarly regardless of the huge changes in illumination over the day or from place to place. The maximum contrast of an image is the contrast ratio or dynamic range.</p>
      </div>
    )
  }

});

