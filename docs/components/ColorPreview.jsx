
var React = require('react')
var HeadingBadge = require('./HeadingBadge.jsx')

var ColorPreview = React.createClass({

  getDefaultProps: function () {
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

  render: function () {
    var color = this.props.hex
    var backgroundColor = this.props.combo.hex
    var previewStyle = {
      color: color,
      backgroundColor: backgroundColor
    }
    var contrast = this.props.combo.contrast.toFixed(2)
    return (
      <div className="mb2"
        style={previewStyle}>
        <div className="flex flex-center flex-wrap mxn2">
          <div className="flex-auto px2">
            <HeadingBadge {...this.props} />
          </div>
          <div className="h2 bold px2">{contrast}</div>
        </div>
        <h2 className="h1 mt0">Contrast</h2>
        <p className="">Contrast is the difference in luminance or color that makes an object (or its representation in an image or display) distinguishable. In visual perception of the real world, contrast is determined by the difference in the color and brightness of the object and other objects within the same field of view. Because the human visual system is more sensitive to contrast than absolute luminance, we can perceive the world similarly regardless of the huge changes in illumination over the day or from place to place. The maximum contrast of an image is the contrast ratio or dynamic range.</p>
      </div>
    )
  }

})

module.exports = ColorPreview

