React         = require 'react'
Reflux        = require 'reflux'
BlogTitle     = require '../components/blog-title'
BlogStore     = require '../stores/blog'
BlogActions   = require '../actions/blog'
styles        = require '../styles'

module.exports = React.createClass
  mixins: [
    Reflux.connect(BlogStore)
  ]
  
  componentDidMount: ->
    BlogActions.fetchBlogs()

  render: ->
    <div>
      <h1>Blogs</h1>
      {
        @state.blogs.map (blog) ->
          <BlogTitle key={blog.slug} category={blog.category} title={blog.title} createdAt={blog.createdAt} />
      }
    </div>
