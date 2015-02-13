/** @jsx React.DOM */

var React = require('react');
var Matrix = require('./matrix.jsx');
var Readme = require('./readme.jsx');
var ThresholdExample = require('./threshold-example.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      isEditing: true
    }
  },

  toggleEdit: function() {
    var isEditing = !this.state.isEditing;
    this.setState({ isEditing: isEditing });
  },

  render: function() {
    return (
      <div>
        <Matrix {...this.props} isEditing={this.state.isEditing} toggleEdit={this.toggleEdit} />
        <Readme {...this.props} isEditing={this.state.isEditing} />
      </div>
    )
  }

});

