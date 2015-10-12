React           = require 'react'
ReactRouter     = require 'react-router'
styles          = require '../styles'

module.exports = React.createClass
  # mixins: [ Router.State ]
  render: ->
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Kuang's Page</h1>
        <ul>
          <li>Links</li>
          <ul style={styles.secondLinks}>
            <li><a href="https://github.com/xuqingkuang" style={styles.link}>Github</a></li>
            <li><a href="https://cn.linkedin.com/in/xuqingkuang" style={styles.link}>Linkedin</a></li>
            <li><a href="http://www.zhihu.com/people/xuqingkuang" style={styles.link}>Zhihu</a></li>
          </ul>
        </ul>
      </header>
      <section style={styles.content}>
        {this.props.children}
      </section>
      <footer style={styles.footer}>
        <small>Hosted on GitHub Pages — Theme by <a href="https://github.com/orderedlist" style={styles.textLink}>orderedlist</a> and refined by <a href="mailto:xuqingkuang@qq.com" style={styles.textLink}>XQ Kuang</a></small>
      </footer>
    </div>
