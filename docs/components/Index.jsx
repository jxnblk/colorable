
var React = require('react');
//var qs = require('query-string');
//var Matrix = require('./matrix.jsx');
var Readme = require('./Readme.jsx');
//var Footer = require('./footer.jsx');

module.exports = React.createClass({

  componentDidMount: function() {
    if (window) {
      //var params = qs.parse(window.location.search);
    }
  },

  render: function() {
    return (
      <main>
        <Readme {...this.props} />
      </main>
    )
  }

});

