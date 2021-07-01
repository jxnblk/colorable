const React = require('react')
const { Switch, Route, Redirect } = require('react-router-dom')
const Index = require('./components/Index.jsx')
const Demos = require('./components/Demos.jsx')
const TextDemo = require('./components/TextDemo.jsx')
const MatrixDemo = require('./components/MatrixDemo.jsx')

var Routes = (props) =>
    <Switch>
    <Route path='/colorable/demos/text/' handler={TextDemo} />
    <Route path='/colorable/demos/matrix/' handler={MatrixDemo} />
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

module.exports = Routes

