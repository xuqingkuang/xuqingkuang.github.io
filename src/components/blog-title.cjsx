React           = require('react')
ReactRouter     = require 'react-router'
styles          = require '../styles'

{Link} = ReactRouter

module.exports = React.createClass
  render: ->
    <p>[{@props.category}] <Link to={"/blogs/#{@props.slug}"} style={styles.link}>{@props.title}</Link> <small>{@props.createdAt}</small></p>
