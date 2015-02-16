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
      return (<div className="h6 inline-block px1 rounded" style={style}>AAA</div>)
    } else if (level.aa) {
      return (<div className="h6 inline-block px1 rounded" style={style}>AA</div>)
    } else if (level.aaLarge) {
      return (<div className="h6 inline-block px1 rounded" style={style}>AA Large</div>)
    } else {
      return (<div className="h6 inline-block">Fail</div>)
    }
  },

  openModal: function() {
    this.props.openModal(this.props);
  },

  render: function() {
    var style = {
      width: '8rem',
      color: this.props.hex,
      backgroundColor: this.props.combo.hex,
      boxSizing: 'border-box',
      textDecoration: 'none',
      cursor: 'pointer'
    };
    var contrast = this.props.combo.contrast.toFixed(2);
    var title = 'Preview ' + this.props.hex + ' on ' + this.props.combo.hex;
    return (
      <a className="center bold flex-none p2"
        onClick={this.openModal}
        title={title}
        style={style}>
        <div>{contrast}</div>
        {this.renderBadge()}
      </a>
    )
  }

});

