React = require('react')

module.exports = React.createClass
  render: ->
    createMarkup = => __html: @props.content

    <article>
      <h2>{@props.title}</h2>
      <small>{@props.category} - {@props.createdAt}</small>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </article>
