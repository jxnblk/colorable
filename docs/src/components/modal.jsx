/** @jsx React.DOM */

var React = require('react');

/*
 * To do:
 * - Esc keyboard shortcut
 * - transition/animation
 */

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      flush: false
    }
  },

  close: function(e) {
    this.props.onDismiss(e);
  },

  render: function() {
    var isOpen = this.props.isOpen;
    var header = this.props.header;
    var containerStyle = {
      display: isOpen ? '' : 'none',
    };
    var modalStyle = {
      minWidth: '16rem',
      maxWidth: '48rem',
      margin: 'auto',
      boxShadow: '0 4px 4px rgba(0,0,0,.1)',
    };
    var bodyClass = this.props.flush ? '' : 'p2';
    return (
      <div className="fixed top-0 right-0 bottom-0 left-0 z4 flex flex-center p2 overflow-auto bg-darken-4"
        style={containerStyle}>
        <div className="absolute top-0 right-0 bottom-0 left-0"
          onClick={this.close}/>
        <div className="relative dark-gray bg-white rounded" style={modalStyle}>
          <div className="flex flex-center border-bottom">
            <div className="bold p2 flex-auto">{header}</div>
            <button className="h3 button-muted black"
              onClick={this.close}
              title="Dismiss modal overlay">
              &times;
            </button>
          </div>
          <div className={bodyClass}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }

});

