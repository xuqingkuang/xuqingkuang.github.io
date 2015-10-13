React = require('react')

module.exports = React.createClass
  render: ->
    <section>
      <h2>{this.props.title}</h2>
      <div>{this.props.children}</div>
    </section>
