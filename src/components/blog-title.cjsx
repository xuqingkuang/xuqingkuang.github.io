React = require('react')

module.exports = React.createClass
  render: ->
    <p>[{@props.category}] <b>{@props.title}</b> <small>{@props.createdAt}</small></p>
