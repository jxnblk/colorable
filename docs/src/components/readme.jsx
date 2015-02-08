/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

  render: function() {
    var html = this.props.readme;
    return (
      <div
        className="container px2"
        dangerouslySetInnerHTML={{__html: html}} />
    )
  }

});

