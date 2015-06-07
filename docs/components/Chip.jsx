
var React = require('react')
var Badge = require('./Badge.jsx')

var Chip = React.createClass({

  openModal: function() {
    this.props.openModal(this.props)
  },

  render: function() {
    var style = {
      width: '8rem',
      color: this.props.hex,
      backgroundColor: this.props.combo.hex,
      boxSizing: 'border-box',
      textDecoration: 'none',
      cursor: 'pointer'
    }
    var contrast = this.props.combo.contrast.toFixed(2)
    var title = 'Preview ' + this.props.hex + ' on ' + this.props.combo.hex
    return (
      <a className="center bold flex-none p2"
        onClick={this.openModal}
        title={title}
        style={style}>
        <div>{contrast}</div>
        <Badge {...this.props} />
      </a>
    )
  }

})

module.exports = Chip

