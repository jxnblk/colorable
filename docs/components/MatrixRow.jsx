
var React = require('react')
var createReactClass = require('create-react-class')
var Chip = require('./Chip.jsx')

var MatrixRow = createReactClass({

  renderChip: function(combo, i) {
    return (
      <Chip key={i} {...this.props} combo={combo} />
    )
  },

  render: function() {
    var style = {
      height: '6rem'
    }
    return (
      <div className="flex flex-stretch" style={style}>
        {this.props.combinations.map(this.renderChip)}
      </div>
    )
  }

})

module.exports = MatrixRow

