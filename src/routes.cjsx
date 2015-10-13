React           = require 'react'
ReactRouter     = require 'react-router'
Layout          = require './components/layout'
NotFound        = require './pages/not-found'
AboutMe         = require './pages/about-me'
Blogs           = require './pages/blogs'
Blog            = require './pages/blog'

{Router, Route, IndexRoute}  = ReactRouter

module.exports = (
  <Router>
    <Route path='/' component={Layout}>
      <IndexRoute component={AboutMe} />
      <Route path='blogs' component={Blogs} />
      <Route path='blogs/:slug' component={Blog} />
    </Route>
    <Route path='*' component={NotFound} />
  </Router>
)
