import React, { PropTypes } from 'react';
import Nav from './nav';
import './layout.less';

const Layout = ({children}) => {
  return (
    <div id="kxq-site">
      <div className="header">
        <span className="logo">数据控</span>
        <Nav />
      </div>
      <div className="container-fluid">
        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default Layout;
