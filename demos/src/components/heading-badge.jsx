
var React = require('react');

module.exports = React.createClass({

  render: function() {
    if (!this.props.combo.accessibility) {
      return false;
    }
    var level = this.props.combo.accessibility;
    var headingClass = 'h00 h00-responsive m0 ' + this.props.className;
    if (level.aaa) {
      return (<h1 className={headingClass}>AAA</h1>)
    } else if (level.aa) {
      return (<h1 className={headingClass}>AA</h1>)
    } else if (level.aaLarge) {
      return (<h1 className={headingClass}>AA Large</h1>)
    } else {
      return (<h1 className={headingClass}>Fail</h1>)
    }
  }

});

