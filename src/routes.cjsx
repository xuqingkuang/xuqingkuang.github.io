React           = require 'react'
ReactRouter     = require 'react-router'
Layout          = require './components/layout'
NotFound        = require './pages/not-found'
AboutMe         = require './pages/about-me'

{Router, Route, IndexRoute}  = ReactRouter

module.exports = (
  <Router>
    <Route path="/" component={Layout}>
      <IndexRoute component={AboutMe} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
)
