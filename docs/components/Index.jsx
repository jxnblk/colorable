
var React = require('react')
var Readme = require('./Readme.jsx')

module.exports = React.createClass({

  componentDidMount: function () {
    if (window) {
    }
  },

  render: function() {
    return (
      <main>
        <Readme {...this.props} />
      </main>
    )
  }

})

