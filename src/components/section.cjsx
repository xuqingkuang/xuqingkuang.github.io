React = require('react')

module.exports = React.createClass
  render: ->
    return (
      <section>
        <h2>{@props.title}</h2>
        <p>{@props.children}</p>
      </section>
    )
