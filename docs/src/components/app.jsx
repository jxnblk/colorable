/** @jsx React.DOM */

var React = require('react');
var Matrix = require('./matrix.jsx');

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <Matrix {...this.props} />
      </div>
    )
  }

});

