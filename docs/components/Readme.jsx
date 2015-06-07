
var React = require('react')

var Readme = React.createClass({

  render: function () {
    return (
      <div className='container px2'>
        <div
          className='prose mb4'
          dangerouslySetInnerHTML={{ __html: this.props.readme }} />
      </div>
    )
  }

})

module.exports = Readme

