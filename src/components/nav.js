import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu } from 'antd';

export default class Nav extends Component {

  constructor (props) {
    super(props);
    let selectedKey = ["1"]
    if (window.location.hash.indexOf('#/about') === 0) {
      selectedKey = ["4"]
    }
    this.state = {
      selectedKeys: selectedKey
    }
  }

  render () {
    return (
      <Menu
        mode="horizontal"
        defaultSelectedKeys={this.state.selectedKeys}>
        <Menu.Item key="1">
          <Link to="/">博客</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <a href="https://github.com/xuqingkuang" target="_blank">Github</a>
        </Menu.Item>
        <Menu.Item key="3">
          <a href="https://www.zhihu.com/people/xuqingkuang" target="_blank">
            知乎
          </a>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/about">关于</Link>
        </Menu.Item>
      </Menu>
    )
  }
}
