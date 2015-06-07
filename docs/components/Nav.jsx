
var React = require('react')
var Link = require('react-router').Link

var Nav = React.createClass({

  render: function () {
    return (
      <nav className='sm-flex border-bottom'>
        <a href={this.props.baseUrl} 
          className='btn py2'>
          Colorable
        </a>
        <a href={this.props.baseUrl + 'demos'}
          className='btn py2'>
          Demos
        </a>
        <a href={this.props.baseUrl + 'demos/text'}
          className='btn py2 sm-show'>
          Text Demo
        </a>
        <a href={this.props.baseUrl + 'demos/matrix'}
          className='btn py2 sm-show'>
          Matrix Demo
        </a>

        <Link to='/'
          className='btn py2 red'>
          Colorable
        </Link>
        <Link to='/demos'
          className='btn py2 red'>
          Demos
        </Link>
        <Link to='/demos/text'
          className='btn py2 sm-show red'>
          Text Demo
        </Link>
        <Link to='/demos/matrix'
          className='btn py2 sm-show red'>
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

