import React from 'react';
import { Link } from 'react-router';
import { Menu, Breadcrumb } from 'antd';
import LayoutStyle from './layout.less';

export default ({children}) => {
  return (
    <div id="kxq-site">
      <div className="header">
        <span className="logo">数据控</span>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1">
            <Link to="/">博客</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <a href="https://github.com/xuqingkuang" target="_blank">Github</a>
          </Menu.Item>
          <Menu.Item key="3">
            <a href="https://www.zhihu.com/people/xuqingkuang" target="_blank">知乎</a>
          </Menu.Item>
        </Menu>
      </div>
      <div className="container">
        {children}
      </div>
    </div>
  )
}

/*
export default ({ children }) => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>KXQ's Site</h1>
        <ul>
          <li>
            <Link to="/">博客</Link>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://github.com/xuqingkuang">Github</a>
          </li>
          <li>
            <a href="https://www.zhihu.com/people/xuqingkuang">知乎</a>
          </li>
        </ul>
      </header>
      <section style={styles.content}>
        {children}
      </section>
      <footer style={styles.footer}>
        <p><small>Hosted on GitHub Pages — Theme by <a href="https://github.com/orderedlist">orderedlist</a> and refined by <a href="http://kuang.it">XQ Kuang</a></small></p>
      </footer>
    </div>
  )
}
*/