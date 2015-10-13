React = require('react')

module.exports = React.createClass
  render: ->
    <section>
      <h2>{@props.title}</h2>
      <div>{@props.children}</div>
    </section>
