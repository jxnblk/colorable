
var React = require('react')

var HeadingBadge = React.createClass({

  render: function () {
    if (!this.props.combo.accessibility) {
      return false
    }
    var level = this.props.combo.accessibility
    var headingClass = 'h00 h00-responsive m0'
    var styles = {
      heading: {
        fontSize: '16vmin'
      }
    }
    var value;
    if (level.aaa) {
      value = 'AAA'
    } else if (level.aa) {
      value = 'AA'
    } else if (level.aaLarge) {
      value = 'AA Large'
    } else {
      value = 'Fail'
    }
    return (
      <h1 className={headingClass}
        style={styles.heading}>
        {value}
      </h1>
    )
  }

})

module.exports = HeadingBadge

