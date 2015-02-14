/** @jsx React.DOM */

var React = require('react');

  //var CssLinkForm = require('./css-link-form.jsx');
var AddColorForm = require('./add-color-form.jsx');
var ThresholdToggle = require('./threshold-toggle.jsx');

module.exports = React.createClass({

  render: function() {
    var isEditing = this.props.isEditing;
    var toolbarStyle = {
      top: isEditing ? '' : '-3.5rem',
      transition: 'top .2s ease-out',
    };
    return (
      <div className="fixed top-0 left-0 right-0 z2 flex flex-center flex-wrap white bg-dark-gray" style={toolbarStyle}>
        <div className="bold p2">Colorable</div>
        <div className="flex-auto" />
        <ThresholdToggle {...this.props}
          updateThreshold={this.props.updateThreshold}
          className="py1 mr2" />
        <AddColorForm {...this.props}
          handleChange={this.props.handleChange}
          className="py1 mr2" />
        {/*
        <CssLinkForm {...this.props}
          handleChange={this.props.handleChange}
          className="py1 mr2" />
        */}
        <div className="p1">
          <button className="button py1 button-nav-dark bg-darken-4"
            onClick={this.props.toggleEdit}>
            Done
          </button>
        </div>
      </div>
    )
  }

});

