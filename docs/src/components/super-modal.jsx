/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      flush: false,
      style: {}
    }
  },

  close: function(e) {
    this.props.onDismiss(e);
  },

  render: function() {
    var isOpen = this.props.isOpen;
    var header = this.props.header;
    var containerStyle = this.props.style;
    containerStyle.display = isOpen ? '' : 'none';
    containerStyle.cursor = 'pointer';
    var modalStyle = {
      minWidth: '16rem',
      maxWidth: '48rem',
      margin: 'auto',
    };
    var containerClass = 'fixed top-0 right-0 bottom-0 left-0 z4 flex flex-center overflow-auto popin ';
    containerClass += this.props.flush ? '' : 'p2';
    return (
      <div className={containerClass}
        onClick={this.close}
        style={containerStyle}>
        <div className="absolute top-0 right-0 left-0 p2">
          <div className="flex flex-center">
            <div className="bold flex-auto">{header}</div>
            <button className="h3 button-muted"
              onClick={this.close}
              title="Dismiss modal overlay">
              &times;
            </button>
          </div>
        </div>
        <div className="relative mx-auto" style={modalStyle}>
          {this.props.children}
        </div>
      </div>
    )
  }

});

