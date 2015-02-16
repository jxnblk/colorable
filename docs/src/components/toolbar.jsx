/** @jsx React.DOM */

var React = require('react');

var ThresholdToggle = require('./threshold-toggle.jsx');

module.exports = React.createClass({

  render: function() {
    var isApp = this.props.isApp;
    var toolbarStyle = {
      top: isApp ? '' : '-3.5rem',
      transition: 'top .2s ease-out',
    };
    return (
      <div className="fixed top-0 left-0 right-0 z2 flex flex-center flex-wrap white bg-dark-gray" style={toolbarStyle}>
        <a href="#!" className="button py2 button-nav-light white" onClick={this.props.toggleApp}>Colorable</a>
        <div className="flex-auto" />
        <div className="sm-show">
          <ThresholdToggle {...this.props}
            updateThreshold={this.props.updateThreshold}
            className="p1" />
        </div>
        <div className="py1">
          <button className="h3 button py1 button-muted white"
            title="Exit app mode"
            onClick={this.props.toggleApp}>
            &times;
          </button>
        </div>
      </div>
    )
  }

});

