/** @jsx React.DOM */

var React = require('react');
var qs = require('query-string');
var Matrix = require('./matrix.jsx');
var Readme = require('./readme.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      //isApp: false
    }
  },

  toggleApp: function() {
    var isApp = !this.state.isApp;
    this.setState({ isApp: isApp });
  },

  componentDidMount: function() {
    if (window) {
      var params = qs.parse(window.location.search);
      if (params.mode == 'app') {
        this.setState({ isApp: true });
      }
    }
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

