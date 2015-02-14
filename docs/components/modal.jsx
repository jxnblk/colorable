/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

  //getDefaultProps: function() {
  //  return {
  //    //isOpen: false,
  //    //onDismiss: function() {},
  //  }
  //},

  /*
  getInitialState: function() {
    console.log('initial state');
    return {
      isOpen: this.props.isOpen,
    }
  },

  open: function() {
    this.setState({ isOpen: true });
  },
  */

  close: function(e) {
    //this.setState({ isOpen: false });
    e.stopPropagation();
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
    return (
      <div className="fixed top-0 right-0 bottom-0 left-0 z4 flex flex-center p2 overflow-auto"
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
          <div className="p2">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }

});

