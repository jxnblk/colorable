/** @jsx React.DOM */

var React = require('react');
var Matrix = require('./matrix.jsx');
var Readme = require('./readme.jsx');
var ThresholdExample = require('./threshold-example.jsx');

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <Matrix {...this.props} />
        <Readme {...this.props} />
      </div>
    )
  }

});

