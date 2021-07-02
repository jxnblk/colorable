/**
 * Webpack entry point (actually two of them)
 *
 * Webpack is only used to generate the demos - There is no webpack
 * going on when using colorable's main matter (in ../index.js).
 *
 * Each demo page is a separate React app stored in its own HTML
 * file. However, they all pretend to be one and the same React app,
 * thanks to server-side rendering magic within entry.jsx. Simply put
 * (ha!):
 *
 * - webpack, running in node.js, builds bundle.js out of entry.jsx
 *   and its dependency tree, then eval's the result (since it is now
 *   palatable UMD code), and runs it once per HTML page to output
 *   (through ../webpack.config.js driving
 *   ./generate-static-pages.js);
 *
 * - each HTML page loads up bundle.js *again* via <script> in the
 *   browser (which again, is possible thanks to UMD) and runs a
 *   “normal” React code flow.
 *
 * In the first case, the entry point is the default export function
 * of this module (because that's what ./generate-static-pages.js
 * expects); in the second case, the main code body of entry.jsx
 * (which will run when the <script> figures that we live in the
 * browser because there is a `document` global object) assumes
 * control.
 */
import React from 'react'  // Runtime for transpiled JSX code
import Router from './Router.jsx'
import Root from './components/Root.jsx'
import TextDemo from './components/TextDemo.jsx'
import MatrixDemo from './components/MatrixDemo.jsx'

function isBrowser() {
    try {
        return ! (!document)
    } catch (e) {
        return false
    }
}

/**
 * Render the interactive part of one of the demos in the browser
 */
function renderDemo () {
  for (const reactMiniApp of [{ id: "text-demo",   class: TextDemo },
                              { id: "matrix-demo", class: MatrixDemo }]) {
    const target = document.getElementById(reactMiniApp.id)
    if (target) {
      const Demo = reactMiniApp.class
      require('react-dom').render(<Demo/>, target)
    }
  }

  // GA
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-4603832-6', 'auto');
}

function renderStatic (props) {
  // We are in node.js, being eval'd and called by webpack.config.js
  // Render to a string, using a StaticRouter
  const ReactDOMServer = require('react-dom/server')
  return "<!DOCTYPE html>" + ReactDOMServer.renderToString(<Root { ...props }><Router { ...props }/></Root>)
}

if (isBrowser()) {
  document.addEventListener('DOMContentLoaded', renderDemo)
}
/* "else" : */
export default renderStatic
