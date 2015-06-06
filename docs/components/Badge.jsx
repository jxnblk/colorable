
var React = require('react')

var Badge = React.createClass({


  render: function () {
    if (!this.props.combo.accessibility) {
      return false
    }
    var level = this.props.combo.accessibility
    var style = {
      color: this.props.combo.hex,
      backgroundColor: this.props.hex
    }

    if (level.aaa) {
      return (<div className="h6 bold inline-block px1 rounded" style={style}>AAA</div>)
    } else if (level.aa) {
      return (<div className="h6 bold inline-block px1 rounded" style={style}>AA</div>)
    } else if (level.aaLarge) {
      return (<div className="h6 bold inline-block px1 rounded" style={style}>AA Large</div>)
    } else {
      return (<div className="h6 bold inline-block">Fail</div>)
    }
  }

})

module.exports = Badge

