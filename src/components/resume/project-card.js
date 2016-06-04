import React from 'react';
import { Card } from 'antd';

export default ({title, project, example, children}) => {

  const extra = (
    <div className="screen-only">
      <a href={project}>项目链接</a>
      &nbsp;|&nbsp;
      <a href={example}>演示页面</a>
    </div>
  );

  return (
    <Card title={title} extra={extra}>
      <div className="print-only">
        <table className="print-product-table">
          <tbody>
            <tr>
              <td>项目链接：</td>
              <td><a href={project}>{project}</a></td>
            </tr>
            <tr>
              <td>演示页面：</td>
              <td><a href={example}>{example}</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      {children}
    </Card>
  );
}
