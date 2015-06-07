
var React = require('react')
var Ad = require('./Ad.jsx')

var Demos = React.createClass({

  renderLink: function(item, i) {
    return (
      <li key={i}>
        <a href={item.href}
          className='h2 bold block'>
          {item.label}
        </a>
      </li>
    )
  },

  render: function () {
    var styles = {
      container: {
        minHeight: '90vh'
      }
    }
    var links = [
      { href: '/colorable/demos/text', label: 'Text Demo' },
      { href: '/colorable/demos/matrix', label: 'Matrix Demo' },
      { href: 'http://basscss.com/docs/reference/color-combinations', label: 'Basscss Color Combos' },
      { href: 'http://clrs.cc/a11y', label: 'clrs.cc/a11y' },
    ]

    return (
      <div
        className='container px3 py3'
        style={styles.container}>
        <div className='sm-flex mxn2'>
          <div className='flex-auto px2'>
            <h1>Demos</h1>
            <ul className='list-reset'>
              {links.map(this.renderLink)}
            </ul>
          </div>
          <div className='px2 py4'>
            <Ad />
          </div>
        </div>
      </div>
    )
  }

})

module.exports = Demos

