Reflux          = require 'reflux'
moment          = require 'moment'
BlogActions     = require '../actions/blog'
BlogCollection  = require '../models/blog-collection'
config          = require '../config'

module.exports = Reflux.createStore
  init: ->
    @listenTo(BlogActions.fetchBlogs, @fetchBlogs)

  getInitialState: ->
    categories: []
    blogs: [
      slug: ''
      category: 'loading'
    ]

  fetchBlogs: ->
    collection = new BlogCollection()
    collection.fetch
      success: (collection) =>
        blogs = collection.models.map (m) ->
          m.attributes.createdAt = moment(m.createdAt).format(config.dateTimeFormat)
          m.attributes
        @trigger {blogs: blogs}
