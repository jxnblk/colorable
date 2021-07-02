import React from 'react'
import Head from './Head.jsx'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

export default (props) => 
      <html>
        <Head {...props} />
        <body>
          <Nav {...props} />
          {props.children}
          <Footer {...props} />
        </body>
      </html>

