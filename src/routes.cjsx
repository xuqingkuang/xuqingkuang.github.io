React     = require 'react'
Router    = require 'react-router'
Layout    = require './components/layout'
NotFound  = require './pages/not-found'
AboutMe   = require './pages/aboutme'

{Route, DefaultRoute, NotFoundRoute}  = Router

module.exports = (
  <Route handler={Layout}>
    <Route name="aboutme" handler={AboutMe} path="/" addHandlerKey={true} />
    <DefaultRoute handler={AboutMe} />
    <NotFoundRoute handler={NotFound} />
  </Route>
)
