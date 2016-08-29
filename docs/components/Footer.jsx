
var React = require('react');

var Footer = React.createClass({

  render: function() {
    return (
      <footer className='px2 py2 border-top'>
        <div className='container'>
          <div className='h5 flex flex-baseline flex-wrap mxn2'>
            <a href='http://jxnblk.com/colorable'
              className='btn'>
              colorable
            </a>
            <span>v{this.props.version}</span>
            <a href='https://npmjs.com/package/colorable'
              className='btn'>
              npm
            </a>
            <a href='https://github.com/jxnblk/colorable'
              className='btn'>
              GitHub
            </a>
            <div className='flex-auto' />
            <a href='http://jxnblk.com'
              className='btn'>
              Made by Jxnblk
            </a>
          </div>
        </div>
      </footer>
    )
  }

});

module.exports = Footer;

