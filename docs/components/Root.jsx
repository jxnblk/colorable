
var React = require('react')
var Head = require('./Head.jsx')
var Nav = require('./Nav.jsx')
var Footer = require('./Footer.jsx')

module.exports = (props) => {
    return (
      <html>
        <Head {...props} />
        <body>
          <Nav {...props} />
          {props.children}
          <Footer {...props} />
        </body>
      </html>
    )
  }

