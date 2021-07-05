import React from 'react'
import { Switch, Route, Redirect, StaticRouter } from 'react-router-dom'
import Index from './components/Index.jsx'
import Demos from './components/Demos.jsx'

export default (props) =>
<StaticRouter location={props.location}>
    <Switch>
    <Route path='/colorable/demos/text/'>
      {/* This is the seam: server-side rendering stops here.
        * entry.jsx (after getting webpack'd and <script>ed into the
        * browser) will resume doing “normal” React inside this
        * div. */}
      <div id="text-demo"/>
    </Route>
    <Route path='/colorable/demos/matrix/'>
      <div id="matrix-demo"/>
    </Route>
    <Route path='/colorable/demos/'>
      <Demos/>
    </Route>
    <Route path='/colorable/'>
      <Index { ... props } />
    </Route>

    <Redirect from='/' to='/colorable/' />
    <Redirect from='/colorable/demos/' to='/colorable/demos' />
    <Redirect from='/colorable/demos/text/' to='/colorable/demos/text' />
    <Redirect from='/colorable/demos/matrix/' to='/colorable/demos/matrix' />
    </Switch>
</StaticRouter>
