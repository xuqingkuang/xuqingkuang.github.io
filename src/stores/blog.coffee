Reflux          = require 'reflux'
moment          = require 'moment'
BlogActions     = require '../actions/blog'
BlogCollection  = require '../models/blog-collection'
config          = require '../config'

module.exports = Reflux.createStore
  init: ->
    @listenTo(BlogActions.fetchBlogs, @fetchBlogs)
    @listenTo(BlogActions.getBlog, @getBlog)

    @collection = new BlogCollection()
    @blogs = [
      slug: ''
      category: 'loading'
    ]

  getInitialState: ->
    categories: []
    blogs: @blogs

  fetchBlogs: (callback) ->
    unless callback?
      callback = => @trigger {blogs: @blogs}
    return callback() if @collection.isFetched
    @collection.fetch
      success: (collection) =>
        @collection.isFetched = yes
        @blogs = collection.models.map (m) ->
          m.attributes.createdAt = moment(m.createdAt).format(config.dateTimeFormat)
          m.attributes
        callback()

  getBlog: (slug) ->
    slug = encodeURIComponent(slug)
    filterBlog = =>
      filteredBlogs = @blogs.filter (blog) -> blog.slug is slug
      @trigger {blogs: filteredBlogs}
    return filterBlog() if @collection.isFetched
    @fetchBlogs(filterBlog)
