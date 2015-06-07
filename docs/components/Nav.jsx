
var React = require('react')
var Link = require('react-router').Link

var Nav = React.createClass({

  render: function () {
    return (
      <nav className='sm-flex border-bottom'>
        <a href='/'
          className='btn py2'>
          Colorable
        </a>
        <a href='/demos'
          className='btn py2'>
          Demos
        </a>
        <a href='/demos/text'
          className='btn py2 sm-show'>
          Text Demo
        </a>
        <a href='/demos/matrix'
          className='btn py2 sm-show'>
          Matrix Demo
        </a>
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

