/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

  renderBadge: function() {
    var level = this.props.combo.accessibility;
    var style = {
      color: this.props.combo.hex,
      backgroundColor: this.props.hex
    };
    if (level.aaa) {
      return (<div className="h5 inline-block px1 rounded" style={style}>AAA</div>)
    } else if (level.aa) {
      return (<div className="h5 inline-block px1 rounded" style={style}>AA</div>)
    } else if (level.aaLarge) {
      return (<div className="h5 inline-block px1 rounded" style={style}>AA Large</div>)
    } else {
      return (<div className="h5 inline-block">Fail</div>)
    }
  },

  render: function() {
    var style = {
      width: '8rem',
      color: this.props.hex,
      backgroundColor: this.props.combo.hex
    };
    var contrast = this.props.combo.contrast.toFixed(2);
    return (
      <div className="center bold flex-none p2" style={style}>
        <div>{contrast}</div>
        {this.renderBadge()}
      </div>
    )
  }

});

