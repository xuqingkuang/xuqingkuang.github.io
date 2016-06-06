import React from 'react';
import Nav from './nav';
import LayoutStyle from './layout.less';

export default ({children}) => {
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
