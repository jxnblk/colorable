/**
 * Serve like github.io would
 *
 * Believe me, as of 2021 there is no shortage of sucky, unmaintained
 * “serve” wannabees that cannot be bothered to perform the simplest
 * tasks like URL rewrites. That includes “serve” itself
 * (github.com/vercel/serve-handler/issues/54).
 */

const http = require('http')
const path = require('path')
const finalhandler = require('finalhandler')
const serveStatic = require('serve-static')


const serve = serveStatic(path.dirname(__dirname), { 'index': ['index.html', 'index.htm'] })

// Create server
http.createServer(function onRequest (req, res) {
  const rewritten = req.url.replace(/^\/colorable/, "")
  if (rewritten !== req.url) {
    req.originalUrl = req.url   // Thank God, serve-static supports this
                                // (otherwise directory redirects would fail)
    req.url = rewritten
    serve(req, res, finalhandler(req, res))
  } else {
    res.writeHead(302, {
      'Location': '/colorable/'
    })
    res.end()
  }
}).listen(3000, (err) => {
  console.log("Serving on http://localhost:3000/")
})
