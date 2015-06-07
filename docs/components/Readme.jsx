
var React = require('react')

var Readme = React.createClass({

  render: function () {
    return (
      <div
        className='prose mb4'
        dangerouslySetInnerHTML={{ __html: this.props.readme }} />
    )
  }

})

module.exports = Readme

