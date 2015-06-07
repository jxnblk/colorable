
var React = require('react')
var Link = require('react-router').Link

var Nav = React.createClass({

  render: function () {
    return (
      <nav className='sm-flex border-bottom'>
        <Link to={this.props.baseUrl} 
          className='btn py2'>
          Colorable
        </Link>
        <Link to={this.props.baseUrl + 'demos'}
          className='btn py2'>
          Demos
        </Link>
        <Link to={this.props.baseUrl + 'demos/text'}
          className='btn py2 sm-show'>
          Text Demo
        </Link>
        <Link to={this.props.baseUrl + 'demos/matrix'}
          className='btn py2 sm-show'>
          Matrix Demo
        </Link>
        <div className='flex-auto sm-show' />
        <a href='https://npmjs.com/package/colorable'
          className='btn py2'>
          npm
        </a>
        <a href='https://github.com/jxnblk/colorable'
          className='btn py2'>
          GitHub
        </a>
      </nav>
    )
  }

})

module.exports = Nav

