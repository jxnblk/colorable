
const React = require('react')
const { createBrowserHistory } = require('history')
const Routes = require('./Routes.jsx')
const Root = require('./components/Root.jsx')

function ReactApp(props) {
  const Router = props.Router
  return <Root { ...props }><Router { ...props }><Routes {...props }/></Router></Root>
}

if (typeof this.document !== 'undefined') {
  let history = createBrowserHistory()
  const Router = require('react-router-dom').BrowserRouter
  React.render(<ReactApp {...{history, Router}}/>, document)

  // Tweet button
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document, "script", "twitter-wjs");

  // GA
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-4603832-6', 'auto');
}

// static-site-generator-webpack-plugin/index.js:37:15 says:
// Export from "bundle.js" must be a function that returns an HTML string
module.exports = function render(props) {
  const ReactDOMServer = require('react-dom/server')
  const { StaticRouter } = require('react-router-dom')
  return ReactDOMServer.renderToString(<ReactApp Router={StaticRouter} {...props}/>)
}
