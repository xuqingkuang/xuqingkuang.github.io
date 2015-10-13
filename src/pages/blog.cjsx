React         = require 'react'
Reflux        = require 'reflux'
BlogContent   = require '../components/blog-content'
BlogStore     = require '../stores/blog'
BlogActions   = require '../actions/blog'
styles        = require '../styles'

module.exports = React.createClass
  mixins: [
    Reflux.connect(BlogStore)
  ]
  
  componentDidMount: ->
    BlogActions.getBlog(@props.params.slug)
    window.scrollTo 0, 0

  render: ->
    <div>
      {
        @state.blogs.map (blog) ->
          <BlogContent key={blog.slug} category={blog.category} title={blog.title} createdAt={blog.createdAt} content={blog.content} />
      }
    </div>
