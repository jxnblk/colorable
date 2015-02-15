/** @jsx React.DOM */

var React = require('react');
var Matrix = require('./matrix.jsx');
var Readme = require('./readme.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      isApp: true
    }
  },

  toggleApp: function() {
    var isApp = !this.state.isApp;
    this.setState({ isApp: isApp });
  },

  render: function() {
    return (
      <div>
        <Matrix {...this.props} isApp={this.state.isApp} toggleApp={this.toggleApp} />
        <Readme {...this.props} isApp={this.state.isApp} />
      </div>
    )
  }

});

